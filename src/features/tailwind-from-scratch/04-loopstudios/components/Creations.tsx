import image_curiosity_desktop from '../images/desktop/image-curiosity.jpg';
import image_deep_earth_desktop from '../images/desktop/image-deep-earth.jpg';
import image_fisheye_desktop from '../images/desktop/image-fisheye.jpg';
import image_from_above_desktop from '../images/desktop/image-from-above.jpg';
import image_grid_desktop from '../images/desktop/image-grid.jpg';
import image_night_arcade_desktop from '../images/desktop/image-night-arcade.jpg';
import image_pocket_borealis_desktop from '../images/desktop/image-pocket-borealis.jpg';
import image_soccer_team_desktop from '../images/desktop/image-soccer-team.jpg';
import image_curiosity_mobile from '../images/mobile/image-curiosity.jpg';
import image_deep_earth_mobile from '../images/mobile/image-deep-earth.jpg';
import image_fisheye_mobile from '../images/mobile/image-fisheye.jpg';
import image_from_above_mobile from '../images/mobile/image-from-above.jpg';
import image_grid_mobile from '../images/mobile/image-grid.jpg';
import image_night_arcade_mobile from '../images/mobile/image-night-arcade.jpg';
import image_pocket_borealis_mobile from '../images/mobile/image-pocket-borealis.jpg';
import image_soccer_team_mobile from '../images/mobile/image-soccer-team.jpg';

import { ImageContainer } from './ImageContainer';

export const Creations = () => {
  return (
    <section id="creations">
      <div className="container mx-auto my-32 max-w-6xl px-6 text-gray-900 md:px-0">
        <div className="mb-20 flex justify-center md:justify-between">
          <h2 className="text-center text-4xl uppercase md:text-left md:text-5xl">our creations</h2>
          <button className="my-0 hidden border-2 border-black px-10 py-2 font-alata font-bold uppercase tracking-widest hover:bg-black hover:text-white md:block">
            see all
          </button>
        </div>
        <div className="flex w-full flex-col justify-between space-y-6 text-2xl uppercase text-white md:flex-row md:space-y-0 md:space-x-8">
          <ImageContainer
            desktop_image={image_deep_earth_desktop}
            mobile_image={image_deep_earth_mobile}>
            Deep Earth
          </ImageContainer>
          <ImageContainer
            desktop_image={image_night_arcade_desktop}
            mobile_image={image_night_arcade_mobile}>
            Night Arcade
          </ImageContainer>
          <ImageContainer
            desktop_image={image_soccer_team_desktop}
            mobile_image={image_soccer_team_mobile}>
            Soccer Team VR
          </ImageContainer>
          <ImageContainer desktop_image={image_grid_desktop} mobile_image={image_grid_mobile}>
            The Grid
          </ImageContainer>
        </div>
        <div className="mt-10 flex w-full flex-col justify-between space-y-6 text-2xl uppercase text-white md:flex-row md:space-y-0 md:space-x-8">
          <ImageContainer
            desktop_image={image_from_above_desktop}
            mobile_image={image_from_above_mobile}>
            From up above VR
          </ImageContainer>
          <ImageContainer
            desktop_image={image_pocket_borealis_desktop}
            mobile_image={image_pocket_borealis_mobile}>
            Pocket Borealis
          </ImageContainer>
          <ImageContainer
            desktop_image={image_curiosity_desktop}
            mobile_image={image_curiosity_mobile}>
            The Curiosity
          </ImageContainer>
          <ImageContainer desktop_image={image_fisheye_desktop} mobile_image={image_fisheye_mobile}>
            Make It Fisheye
          </ImageContainer>
        </div>
        <div className="mt-10 flex justify-center md:hidden">
          <button className="my-0 w-full border-2 border-black px-10 py-2 font-alata font-bold uppercase tracking-widest hover:bg-black hover:text-white md:hidden">
            see all
          </button>
        </div>
      </div>
    </section>
  );
};
