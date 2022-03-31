import { largePosts, smallPosts } from './home-posts'

export const imagesFirstRow = largePosts?.map(post => {
  return (
    <li className={'mosaic__list-item item__row-1 ' + post.class} key={new Date() + Math.random()}>
      <a href={post.path}>
        <h3>{post.title}</h3>
        <img src={post.img} alt={post.alt} />
        <h6>{post.description}</h6>
      </a>
    </li>
  )
})

export const imagesSecondRow = smallPosts?.map(post => {
  return (
    <li className={'mosaic__list-item item__row-2 ' + post.class} key={new Date() + Math.random()}>
      <a href={post.path}>
        <h3>{post.title}</h3>
        <img src={post.img} alt={post.alt} />
        <h6>{post.description}</h6>
      </a>
    </li>
  )
})