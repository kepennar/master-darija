import { select, event } from 'd3-selection';
import { transition } from 'd3-transition';
import { drag } from 'd3-drag';
import {
  forceSimulation,
  forceManyBody,
  forceCenter,
  forceLink
} from 'd3-force';

const getDatas = selectedNodeId => {
  const DATAS = {
    nodes: [
      { id: 'center', darija: '', value: '', group: 0 },
      { id: 'node1', darija: '3', value: 'ع', group: 1 },
      { id: 'node2', darija: 'gh', value: 'ﻍ', group: 1 },
      { id: 'node3', darija: 'kh', value: 'ﺥ', group: 1 },
      { id: 'node4', darija: '7', value: 'ﺡ', group: 1 },
      { id: 'node5', darija: '9', value: 'ﻕ', group: 1 },
      { id: 'node6', darija: 'sh', value: 'ش', group: 1 }
    ],
    links: [
      { source: 'node1', target: 'center', value: 1 },
      { source: 'node2', target: 'center', value: 1 },
      { source: 'node3', target: 'center', value: 1 },
      { source: 'node4', target: 'center', value: 1 },
      { source: 'node5', target: 'center', value: 1 },
      { source: 'node6', target: 'center', value: 1 }
    ]
  };
  return {
    nodes: DATAS.nodes
      .map(n => {
        if (selectedNodeId && n.id === 'center') {
          const { darija, value } = DATAS.nodes.find(
            ({ id }) => id === selectedNodeId
          );
          return { id: 'center', darija, value };
        }
        return n;
      })
      .filter(({ id }) => {
        if (!selectedNodeId || selectedNodeId !== id) {
          return true;
        }
        return false;
      }),
    links: DATAS.links.filter(({ source }) => {
      if (!selectedNodeId || selectedNodeId !== source) {
        return true;
      }
      return false;
    })
  };
};
const width = select('body')
  .node()
  .getBoundingClientRect().width;
const height = 400;
const centerX = width / 2;
const centerY = height / 2;
const periphicalCircleRadius = 20;
const centerCircleRadius = 55;

export default (svgElem, onChange) => {
  const svg = select(svgElem)
    .attr('width', width)
    .attr('height', height);

  let rootNode = svg.append('g').attr('stroke', '#fff');

  function collisionWithCenterDetection(dElem) {
    const a = dElem.x - centerX;
    const b = dElem.y - centerY;
    const c = Math.sqrt(a * a + b * b);
    const collision = c - centerCircleRadius < 0;
    return collision;
  }

  function translate(x, y) {
    return `translate(${x}, ${y})`;
  }

  function createCircle(node) {
    const circle = node
      .append('circle')
      .attr('id', d => d.id)

      .attr(
        'r',
        d => (d.id === 'center' ? centerCircleRadius : periphicalCircleRadius)
      );

    node
      .append('clipPath')
      .attr('id', d => `clip-${d.id}`)
      .append('use')
      .attr('xlink:href', d => `#${d.id}`);

    node
      .append('text')
      .attr('clip-path', d => `url(#clip-${d.id})`)
      .append('tspan')
      .attr(
        'x',
        d =>
          d.id === 'center'
            ? -centerCircleRadius / 2
            : -periphicalCircleRadius / 4
      )
      .attr('y', 5)
      .attr('fill', 'white')
      .text(getText);

    return circle;
  }

  function reset(nextSelectedId) {
    const t = transition().duration(400);

    let transitionCounter = 0;
    svg.selectAll('.links').remove();
    rootNode
      .selectAll('circle')
      .transition(t)
      .attr('r', 1e-6)
      .on('start', () => {
        transitionCounter++;
      })
      .on('end', () => {
        rootNode.selectAll('.circle').remove();
        transitionCounter--;
        if (transitionCounter === 0) {
          renderGraph(nextSelectedId);
        }
      });
  }

  function getText(d) {
    if (d.id !== 'center') {
      return d.value;
    }
    return d.value ? `${d.value} - ${d.darija}` : 'Drag here';
  }

  const renderGraph = selectedNodeId => {
    const datas = getDatas(selectedNodeId);
    onChange(datas);

    const link = svg
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(datas.links)
      .enter()
      .append('line');

    // Circles
    let node = rootNode
      .attr('class', 'nodes')
      .selectAll('g')
      .data(datas.nodes)
      .enter()
      .append('g')
      .attr(
        'class',
        d => (d.id === 'center' ? `circle center` : `circle peripherical`)
      )
      .style('filter', 'url(#drop-shadow)')
      .call(
        drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
      );

    function dragstarted(d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(d) {
      const inCenter = collisionWithCenterDetection(d);
      if (inCenter) {
        reset(d.id);
      }

      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    const circle = createCircle(node);

    const simulation = forceSimulation()
      .force(
        'link',
        forceLink()
          .id(d => d.id)
          .distance(100)
      )
      .force('charge', forceManyBody().strength(-300))
      .force('center', forceCenter(centerX, centerY));

    simulation.nodes(datas.nodes).on('tick', ticked);
    simulation.force('link').links(datas.links);

    function ticked() {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node.attr(
        'transform',
        d =>
          d.id === 'center' ? translate(centerX, centerY) : translate(d.x, d.y)
      );
    }
  };

  renderGraph();
};
