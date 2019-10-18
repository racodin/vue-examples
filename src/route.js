import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    component: Home,
  }, {
    path: '/markdown-editor',
    name: 'markdownEditor',
    component: () => import( /* webpackChunkName: "markdownEditor" */ '@/examples/MarkdownEditor/MarkdownEditor.vue')
  }, {
    path: '/github-commits',
    name: 'githubCommits',
    component: () => import( /* webpackChunkName: "githubCommits" */ '@/examples/GitHubCommits/GitHubCommits.vue')
  }, {
    path: '/grid-component',
    name: 'gridComponent',
    component: () => import( /* webpackChunkName: "gridComponent" */ '@/examples/GridComponent/GridComponent.vue')
  }, {
    path: '/tree-view',
    name: 'treeView',
    component: () => import( /* webpackChunkName: "treeView" */ '@/examples/TreeView/TreeView.vue')
  }, {
    path: '/svg-graph',
    name: 'svgGraph',
    component: () => import( /* webpackChunkName: "svgGraph" */ '@/examples/SVGGraph/SVGGraph.vue')
  }, {
    path: '/modal-component',
    name: 'ModalComponent',
    component: () => import( /* webpackChunkName: "modalCompoonent" */ '@/examples/ModalComponent/ModalComponent.vue')
  }, {
    path: '/elastic-header',
    name: 'elasticHeader',
    component: () => import( /* webpackChunkName: "elasticHeader" */ '@/examples/ElasticHeader/ElasticHeader.vue')
  }]
})


export default router;