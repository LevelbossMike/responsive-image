import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return {
      name: 'Model',
      blurhash: 'LABop=AI0K$y}[EMI:-U0zent6oz',
      image:
        'https://images.unsplash.com/photo-1636453774075-cdd32eb64304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2648&q=80',
    };
  }
}
