import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  type: 'button',

  onClick() {},

  actions: {
    click(event) {
      event.preventDefault();
      this.get("onClick")();
    }
  }

});
