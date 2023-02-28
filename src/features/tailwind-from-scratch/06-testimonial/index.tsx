import { Box } from './components/Box';
import bg_pattern_quotation from './images/bg-pattern-quotation.svg';
import image_daniel from './images/image-daniel.jpg';
import image_jeanette from './images/image-jeanette.jpg';
import image_jonathan from './images/image-jonathan.jpg';
import image_kira from './images/image-kira.jpg';
import image_patrick from './images/image-patrick.jpg';

export const Testimonial = () => {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto max-w-7xl p-2 md:p-10">
        <div className="grid gap-6 text-white md:grid-cols-4 md:grid-rows-2">
          <Box
            name="Daniel Clifford"
            image={image_daniel}
            color="purple"
            quotes_images={bg_pattern_quotation}
            className="md:col-span-2"
            verified
            large_text="
              I received a job offer mid-course, and the subjects I learned were current, if not
              more so, in the company I joined. I honestly feel I got every penny's worth."
            small_text="
              I was an EMT for many years before I joined the bootcamp. I've been looking to make a
              transition and have heard some people who had an amazing experience here. I signed up
              for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my life. Since completing
              the course, I've successfully switched careers, working as a Software Engineer at a VR
              startup. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vero
              repudiandae, quasi atque officiis eum consectetur odio amet dolorem deleniti repellat
              expedita aut sunt laudantium cum itaque nam voluptatum quod! Quo totam sequi omnis
              deserunt? Sit nam molestiae excepturi, perspiciatis labore deleniti eum, eligendi
              quisquam quod sed nobis exercitationem tempora!0"
          />
          <Box
            name="Jonathan Walters"
            image={image_jonathan}
            color="gray"
            verified
            large_text="The team was very supportive and kept me motivated"
            small_text="I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam veritatis natus illum ullam ab, nesciunt rerum nobis, quibusdam ad voluptatum rem necessitatibus facere nihil deleniti assumenda vel velit neque quia, nisi ipsum laudantium impedit eveniet iste. Pariatur, exercitationem consequuntur praesentium a est eum velit quos maiores ipsum facere tempora!"
          />
          <Box
            name="Kira Whittle"
            image={image_kira}
            color="white"
            className="hidden md:row-span-2 md:block"
            verified
            large_text="Such a life-changing experience. Highly recommended!"
            small_text="Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!"
          />
          <Box
            name="Jeanette Harmon"
            image={image_jeanette}
            color="white"
            verified
            large_text="An overall wonderful and rewarding experience"
            small_text="Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."
          />
          <Box
            name="Patrick Abrams"
            image={image_patrick}
            color="gray"
            className="md:col-span-2"
            verified
            large_text="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy."
            small_text="The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people."
          />
          <Box
            name="Kira Whittle"
            image={image_kira}
            color="white"
            verified
            className="md:hidden"
            large_text="Such a life-changing experience. Highly recommended!"
            small_text="Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!"
          />
        </div>
      </div>
    </div>
  );
};
