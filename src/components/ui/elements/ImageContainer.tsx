type ImageContainerProps = {
  src: string;
  alt?: string;
};

export function ImageContainer({ src, alt = "Image" }: ImageContainerProps) {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
}
