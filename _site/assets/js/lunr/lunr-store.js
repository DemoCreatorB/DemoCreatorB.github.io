var store = [{
        "title": "Chocolatey:The most Ideal Method to Get Apps for Windows",
        "excerpt":"What is Chocolatey? Chocolatey is a Windows package manager that automates the installation, update, and uninstallation of software applications. It uses the NuGet packaging infrastructure and PowerShell to simplify the process, providing a centralized repository of software packages that users can easily search and install with a single command. Chocolatey...","categories": ["Windows"],
        "tags": ["Windows","Chocolatey"],
        "url": "/windows/ChocolateyTheMostIdealMethodtoGetAppsforWindows/",
        "teaser": null
      },{
        "title": "Intro of Klipper, Fast and Flexible 3d Printer Operating Solution",
        "excerpt":"What is Klipper? Klipper is an open-source firmware that allows 3D printers to use a single-board computer (SBC) as their main controller, instead of relying on the printer’s native controller. This allows for faster and more precise printing, as well as the ability to easily modify and customize printer settings....","categories": ["Klipper"],
        "tags": ["Klipper","3d_Printer","PINEC"],
        "url": "/klipper/IntroOfKlipper/",
        "teaser": null
      },{
    "title": "Jekyll/Klipper",
    "excerpt":"  ","url": "http://localhost:4000/categories/Klipper"
  },{
    "title": "Jekyll/Windows",
    "excerpt":"  ","url": "http://localhost:4000/categories/Windows"
  },{
    "title": "Category",
    "excerpt":" ","url": "http://localhost:4000/categories/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:4000/"
  },{
    "title": null,
    "excerpt":"var idx = lunr(function () { this.field('title') this.field('excerpt') this.field('categories') this.field('tags') this.ref('id') this.pipeline.remove(lunr.trimmer) for (var item in store) { this.add({ title: store[item].title, excerpt: store[item].excerpt, categories: store[item].categories, tags: store[item].tags, id: item }) } }); $(document).ready(function() { $('input#search').on('keyup', function () { var resultdiv = $('#results'); var query = $(this).val().toLowerCase(); var result = idx.query(function...","url": "http://localhost:4000/assets/js/lunr/lunr-en.js"
  },{
    "title": null,
    "excerpt":"step1list = new Array(); step1list[\"ΦΑΓΙΑ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΟΥ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΩΝ\"] = \"ΦΑ\"; step1list[\"ΣΚΑΓΙΑ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΟΥ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΩΝ\"] = \"ΣΚΑ\"; step1list[\"ΟΛΟΓΙΟΥ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΑ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΩΝ\"] = \"ΟΛΟ\"; step1list[\"ΣΟΓΙΟΥ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΑ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΩΝ\"] = \"ΣΟ\"; step1list[\"ΤΑΤΟΓΙΑ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΟΥ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΩΝ\"] = \"ΤΑΤΟ\"; step1list[\"ΚΡΕΑΣ\"]...","url": "http://localhost:4000/assets/js/lunr/lunr-gr.js"
  },{
    "title": null,
    "excerpt":"var store = [ {%- for c in site.collections -%} {%- if forloop.last -%} {%- assign l = true -%} {%- endif -%} {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%} {%- for doc in docs -%} {%- if doc.header.teaser -%} {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture...","url": "http://localhost:4000/assets/js/lunr/lunr-store.js"
  },{
    "title": "Sitemap",
    "excerpt":"","url": "http://localhost:4000/sitemap/"
  },{
    "title": "Tag",
    "excerpt":"","url": "http://localhost:4000/tags/"
  },{
    "title": "Posts by Year",
    "excerpt":"","url": "http://localhost:4000/year-archive/"
  },{
    "title": "Windows",
    "excerpt":"","url": "http://localhost:4000/tags/windows/"
  },{
    "title": "Chocolatey",
    "excerpt":"","url": "http://localhost:4000/tags/chocolatey/"
  },{
    "title": "Klipper",
    "excerpt":"","url": "http://localhost:4000/tags/klipper/"
  },{
    "title": "3d_Printer",
    "excerpt":"","url": "http://localhost:4000/tags/3d-printer/"
  },{
    "title": "PINEC",
    "excerpt":"","url": "http://localhost:4000/tags/pinec/"
  },{
    "title": "Windows",
    "excerpt":"","url": "http://localhost:4000/categories/windows/"
  },{
    "title": "Klipper",
    "excerpt":"","url": "http://localhost:4000/categories/klipper/"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %}{% endif %}Jekyll{{ site.time | date_to_xmlschema }}{{ page.url | absolute_url | xml_escape }}{% assign title = site.title | default: site.name %}{% if page.collection != \"posts\" %}{% assign collection = page.collection | capitalize %}{% assign title = title | append: \" | \" | append: collection %}{% endif...","url": "http://localhost:4000/feed.xml"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %} {% endif %} {% assign collections = site.collections | where_exp:'collection','collection.output != false' %}{% for collection in collections %}{% assign docs = collection.docs | where_exp:'doc','doc.sitemap != false' %}{% for doc in docs %} {{ doc.url | replace:'/index.html','/' | absolute_url | xml_escape }} {% if doc.last_modified_at or doc.date...","url": "http://localhost:4000/sitemap.xml"
  },{
    "title": null,
    "excerpt":"Sitemap: {{ \"sitemap.xml\" | absolute_url }} ","url": "http://localhost:4000/robots.txt"
  }]
