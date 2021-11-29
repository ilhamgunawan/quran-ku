import Head from 'next/head';
import config from '../../lib/config';

type Props = {
  title?: string;
  description?: string;
};

export default function BasicMeta({ title, description }: Props) {
  return (
    <Head>
      <title>{title ? title : config.site_title}</title>
      <meta  
        name='description'
        content={description ? description : config.site_description}
      />
    </Head>
  );
}
