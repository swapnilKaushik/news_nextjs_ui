import Image from "next/image";

const DefaultNewsCard = ({
  title,
  imageUrl,
  height,
  tag,
  content,
  duration,
  outset = true,
}) => {
  return (
    <div
      className={
        outset ? `flex-col space-y-2 m-1` : `flex-col space-y-2 m-1 relative`
      }
    >
      <div
        className="w-full relative overflow-hidden"
        style={{ height: height }}
      >
        <Image
          className="object-cover object-center"
          src="https://cdn.dribbble.com/users/1401331/screenshots/17569793/media/3a9bd9a8557428b20c113bbaa476ecb2.png?compress=1&resize=1000x750&vertical=top"
          fill={true}
          alt="thumbnail"
        />
      </div>
      <div
        className={
          outset
            ? `flex-col space-y-2 p-2`
            : `flex-col space-y-2 p-3 absolute bottom-0 left-0`
        }
      >
        <div className="text-xs">{tag}</div>
        <div className="text-lg font-semibold tracking-wider line-ellipsis-2">
          {title}
        </div>
        {content && <div className="text-sm">{content}</div>}
        <div className="text-xs">{duration}</div>
      </div>
    </div>
  );
};

export default DefaultNewsCard;
