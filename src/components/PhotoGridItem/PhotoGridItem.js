import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  let avifSources = [
    src.replace(".jpg", ".avif"),
    src.replace(".jpg", "@2x.avif"),
    src.replace(".jpg", "@3x.avif"),
  ];
  let jpgSources = [
    src,
    src.replace(".jpg", "@2x.jpg"),
    src.replace(".jpg", "@3x.jpg"),
  ];
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcSet={`
            ${avifSources[0]} 1x, 
            ${avifSources[1]} 2x,
            ${avifSources[2]} 3x`}
          />
          <source
            type="image/jpg"
            srcSet={`
            ${jpgSources[0]} 1x, 
            ${jpgSources[1]} 2x,
            ${jpgSources[2]} 3x`}
          />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
