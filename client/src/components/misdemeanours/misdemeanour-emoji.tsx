interface misdemeanourEmojiProps {
  misdemeanour: string;
}

type EmojiMap = { [name: string]: string };

const emojiMap: EmojiMap = {
  rudeness: "🤪",
  vegetables: "🥗",
  lift: "🗣",
  united: "😈",
};

const MisdemeanourEmoji = ({ misdemeanour }: misdemeanourEmojiProps) => {
  return <> {emojiMap[misdemeanour]}</>;
};

export default MisdemeanourEmoji;
