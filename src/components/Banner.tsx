import { Link } from "preact-router/match";

export const Banner = () => {
  return (
    <div>
      <Link href="./">
        <img
          src="https://gem.blipdiscs.com/img/banner.jpeg"
          width="480"
          height="360"
          class="banner"
          alt="Banner: Greg E Myers"
        />
      </Link>
    </div>
  );
};
