import { Text, Image, Field, withDatasourceCheck, ImageField, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { JSX } from 'react';

type HeroBannerProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    description: RichTextField,
    image: ImageField;
  };
};

const HeroBanner = (props: HeroBannerProps): JSX.Element => (
  <div className="container-HeroBanner">
    <div className="left-column">
      <Text tag="p" className="hero-des" field={props.fields.description}/>
      <Text tag="h2" className="hero-heading" field={props.fields.heading} />
      
    </div>
    <Image className="right-column" field={props.fields.image}  />
  </div>
);

export default withDatasourceCheck()<HeroBannerProps>(HeroBanner);
