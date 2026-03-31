import { Star } from "lucide-react";

type StarRatingProps = {
  count?: number;
};

export function StarRating({ count = 5 }: StarRatingProps) {
  return (
    <div className="tc-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} size={15} fill="currentColor" strokeWidth={0} aria-hidden />
      ))}
    </div>
  );
}
