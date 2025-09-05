// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the AddressInfo component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function AddressInfo(manifest: Manifest): void {
  manifest.addComponent({
    name: 'AddressInfo',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading1', type: CommonFieldTypes.SingleLineText },
      { name: 'address', type: CommonFieldTypes.RichText },
      { name: 'heading2', type: CommonFieldTypes.SingleLineText },
      { name: 'contact', type: CommonFieldTypes.SingleLineText }
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
