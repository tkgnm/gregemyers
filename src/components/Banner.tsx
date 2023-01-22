import { Link } from "preact-router/match";

export const Banner = () => {
  return (
    <div>
      <Link href="./">
        <img
          src="https://gem.blipdiscs.com/img/banner.jpeg"
          class="banner"
          alt="Banner: Greg E Myers"
        />
      </Link>
    </div>
  );
};
