import {
    IconStar,
    IconStarFilled,
    IconStarHalfFilled,
} from '@tabler/icons-react';

export interface ScoreReviewProps {
    score: number;
    size?: number;
}

export default function ScoreReview(props: ScoreReviewProps) {
    function scoreToStar(nota: number) {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (nota >= i) {
                stars.push(<IconStarFilled key={i} size={props.size ?? 12} />);
            } else if (nota >= i - 0.5) {
                stars.push(
                    <IconStarHalfFilled key={i} size={props.size ?? 12} />
                );
            } else {
                stars.push(<IconStar key={i} size={props.size ?? 12} />);
            }
        }
        return stars;
    }

    return (
        <div className="flex gap-0.5 text-emerald-400">
            {scoreToStar(props.score)}
        </div>
    );
}
