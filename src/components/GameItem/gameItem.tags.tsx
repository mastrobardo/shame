import './gameItem.tags.style.scss';

type TTags = {
  tags: Array<string>;
  standalone?: boolean;
};

export const MinifiedTags = ({ tags, standalone }: TTags) => {

  return (
    <ul className='gameItem__tags'>
      {tags?.length && tags.map((tag, idx) => {
        const color = standalone ? '#' + Math.floor(Math.random() * 16777215).toString(16) : 'transparent';
        return <li style={{backgroundColor: color}} key={`${tag}${idx}`}>{tag}</li>;
      })}
    </ul>
  );
};