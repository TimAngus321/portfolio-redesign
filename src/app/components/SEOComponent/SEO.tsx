import { Helmet } from 'react-helmet-async';
import { metaData } from './SEOTypes';

export default function SEO(props: metaData) {
    const { title, description, link } = props;
    return (
        <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name='description' content={description} />
        <meta property="og:description" content={description} />
        <meta name="og:url" content={link} />
        <meta property='og:url' content={link}/>
        <link rel='canonical' href={link} />
        </Helmet>
    )
}