import { setAssetPath } from '../dist/components';
import "../dist/components/my-component";

// assume components have assets
setAssetPath(document.currentScript.src);

(async () => {
  await customElements.whenDefined('my-component');
  const myComponent = document.querySelector('my-component');

  myComponent._clickOnlyMethod(); // should not be available on the component instance (❌ on `dist-custom-elements` output target)
})();
