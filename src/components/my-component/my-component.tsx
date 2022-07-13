import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent {

  // private method syntax (#clickOnlyMethod) fixes issue, but unsure if it impacts Stencil builds
  private _clickOnlyMethod(): void {
    console.log('🤫 this should only be seen when clicked 🤫');
  }

  render() {
    return (
      <Host onClick={this._clickOnlyMethod}>
        😃
      </Host>
    );
  }

}
