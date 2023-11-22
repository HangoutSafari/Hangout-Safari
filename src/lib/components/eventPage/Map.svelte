<script>
  import { Point } from "ol/geom";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import { Map, View } from "ol";
  import { OSM } from "ol/source.js";
  import TileLayer from "ol/layer/Tile.js";
  import Feature from "ol/Feature.js";
  import { Icon, Style } from "ol/style.js";
  import VectorLayer from "ol/layer/Vector.js";
  import VectorSource from "ol/source/Vector.js";
  import { fromLonLat } from "ol/proj";
  import Overlay from "ol/Overlay.js";
  import { Attribution, defaults as defaultControls } from "ol/control.js";

  let target;
  let map;
  onMount(() => {
    if (browser) {
      // Sets the starting point of the map
      const view = new View({
        center: fromLonLat([3.609493, 51.494887]),
        zoom: 16,
      });
      // Gets the map source from OpenStreetMap
      const tileLayer = new TileLayer({ source: new OSM() });
      // Makes a point on the map
      const iconFeature = new Feature({
        geometry: new Point(fromLonLat([3.609493, 51.494887])),
        name: "HZ University of Applied Sciences",
        students: 4000,
        happines_index: 5.5,
      });
      // Makes a new style for the point
      const iconStyle = new Style({
        image: new Icon({
          anchor: [0.5, 46],
          anchorXUnits: "fraction",
          anchorYUnits: "pixels",
          src: "../images/logo.png",
        }),
      });
      // Applies the style to the point
      iconFeature.setStyle(iconStyle);
      // Makes a new vector source and add the point
      const vectorSource = new VectorSource({
        features: [iconFeature],
      });
      // Makes a new vector layer and applys the vector source to it
      const vectorLayer = new VectorLayer({
        source: vectorSource,
      });
      // Collapses a long contribution notice
      const attribution = new Attribution({
        collapsible: true,
        collapsed: true,
        label: "A",
        tipLabel: "Attributions",
      });
      // Initializes the map
      map = new Map({
        target,
        view,
        layers: [tileLayer, vectorLayer],
        controls: defaultControls({
          attribution: false,
          zoom: false,
          rotate: false,
        }).extend([attribution]),
        interactions: [],
      });
    }
  });
</script>

<head>
  <link rel="stylesheet" href="../node_modules/ol/ol.css" />
</head>
<div
  bind:this={target}
  class={`w-full h-full rounded-3xl overflow-hidden lg:[&>.ol-viewport]:!overflow-hidden [&>.ol-viewport]:!overflow-visible ${$$props.class}`}
>
  <div id="popup" />
</div>
