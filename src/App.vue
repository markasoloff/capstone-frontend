<template>
  <div id="app">
    <header>
         <section id="sidebar">
        <div class="inner">
          <nav>
            <ul>                                      
              <li><a href="#Home">Home</a></li>
              <li><a href="#Swap">Swap</a></li>
              <li><a href="#Add">Add</a></li>
              <li><a href="#Redact">Redact</a></li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
    <router-view/>
    <footer id="footer" class="wrapper style1-alt">
      <div class="inner">
        <ul class="menu">
          <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style>
</style>
