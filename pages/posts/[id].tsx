/* eslint-disable react/no-danger -- The HTML we're setting is purely from the file system.
These are my own markdown files and thus should pose no risk for XSS.
*/
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import Date from '../../components/date';
import Layout from '../../components/layout';
import { BlogPost, getAllPostIds, getPostData } from '../../lib/posts';

import utilStyles from '../../styles/utils.module.scss';

export default function Post({
  postData,
}: {
  postData: BlogPost;
}): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ postData: BlogPost; }> = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};

/* eslint-enable react/no-danger */
