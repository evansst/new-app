import React from 'react';
import Header from 'components/Header/Header'
import AccountButton from 'components/headers/buttons/AccountButton';
import NewsFeed from '../components/newsfeed/NewsFeed';

const HomePage = props => {
  const { posts, user } = props

  return (
    <div>
      <Header
        color="primary"
        brand="NewsApp"
        fixed
        absolute
        rightLinks={
          <AccountButton />
        }
      />
      <NewsFeed posts={posts} user={user}/>
      
    </div>
  );
};

export default HomePage;