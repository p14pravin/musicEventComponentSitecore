// eslint-disable-next-line no-unused-vars
import { SitecoreIcon, Manifest, CommonFieldTypes } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the MusicEventSection component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function MusicEventSection(manifest: Manifest): void {
  manifest.addComponent({
    name: 'MusicEventSection',
    icon: SitecoreIcon.DocumentTag,
    fields: [{ name: 'heading', type: CommonFieldTypes.SingleLineText }],
    
    placeholders: ['col1', 'col2', 'col3'],

    params: [{
    
        name: 'layoutMode',
        displayName: 'Layout Mode',
        type: 'Single-Line Text'
    
    }],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
