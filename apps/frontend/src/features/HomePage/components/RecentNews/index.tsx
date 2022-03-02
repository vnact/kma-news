/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useAppSelector } from '@/app/hooks';
import { defaultThumbnail } from '@/constants/thumnail';
import React from 'react';
import { selectData } from '../../homeSlice';
import { LastestNew } from './LastestNew';
import { RecentNewsItem } from './RecentNewsItem';
export const RecentNews = () => {
  const posts = useAppSelector(selectData);
  if (posts.length === 0) return <></>;
  const [lastestPost, ...otherPost] = posts;
  return (
    <>
      <LastestNew
        url={lastestPost.url}
        publishedAt={
          lastestPost.publishedAt
            ? new Date(lastestPost.publishedAt)
            : new Date()
        }
        thumbnailURL={lastestPost.thumbnailURL}
        title={lastestPost.title}
        publisherLogo={
          lastestPost.publisher ? lastestPost.publisher.logo : defaultThumbnail
        }
        publisherName={
          lastestPost.publisher ? lastestPost.publisher.name : 'bao-moi'
        }
        sourceURL={lastestPost.sourceURL}
      />
      <div className="section">
        <div className="list-news">
          {otherPost.map((post, i) => (
            <RecentNewsItem
              key={i}
              url={post.url}
              publishedAt={
                post.publishedAt ? new Date(post.publishedAt) : new Date()
              }
              thumbnailURL={post.thumbnailURL}
              title={post.title}
              publisherLogo={
                post.publisher ? post.publisher.logo : defaultThumbnail
              }
              publisherName={post.publisher ? post.publisher.name : 'bao-moi'}
            />
          ))}
        </div>
      </div>
    </>
  );
};
