import './gameItem.tags.style.scss';

type TTags = {
  tags: Array<string>;
};

export const MinifiedTags = ({ tags }: TTags) => {
    
  return (
        <ul className='gameItem__tags'>
            {tags?.length && tags.map((tag, idx) => <li key={`${tag}${idx}`}>{tag}</li>)}
        </ul>   
  );
};