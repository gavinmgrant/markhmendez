import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TbStarFilled } from "react-icons/tb";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { GoDash } from "react-icons/go";

const Reviews = () => {
  const reviews = [
    {
      name: "Natalie Ezeta-Jones",
      stars: 5,
      content:
        "Mark has been our realtor for the last 2.5 years and helped us find our very first home here in Los Angeles. He is the kind of realtor everyone wants - truly listened to what we were looking for in a home, became our trusted guide throughout the home search and buying process, and helped us navigate any and all concerns as they arose. Mark was with us every step of the way. And after we closed escrow and moved into our home, he continued to check in with us. We can't say enough great things about him and we would highly recommend him to anyone diving into this crazy process of buying a home in Los Angeles.",
    },
    {
      name: "Katelyn Stepanyan",
      stars: 5,
      content:
        "Even though it has been a couple of years since we purchased our home with Mark Mendez, we have continued to stay in touch and have reached out to him with many questions that have come up throughout the years with being new homeowners, as well as first-time landlords. Mark has been incredibly patient and supportive, going above and beyond to help make sure that our questions are answered. We always feel that he has our best interests at heart. During the home buying process, Mark was always honest, and never pressured us. He was patient in helping us through what ended up being a challenging escrow and was never too proud to reach out to other experts to make sure we were getting the most informed advice. We continue to recommend him to all of our friends and co-workers who are looking to purchase a home!",
    },
    {
      name: "Jeremy “JP” Putnam",
      stars: 5,
      content:
        "We worked with Mark Mendez in 2016 to purchase our first home. We enjoyed speaking with Mark when we first met him at an open house and were excited to find out that his team had worked with several of our friends and co-workers in the past. Although buying a house can be daunting, especially the first time through, Mark made the process incredibly clear and painless. We always felt well-informed and taken care of. We were able to get our dream house on our first offer, and Mark even negotiated a few extra thousand in repairs on our as-is purchase! We would definitely recommend Mark to our friends and will likely work with them again down the road. Thanks so much, Mark for helping us buy our first home. We couldn't be happier!",
    },
    {
      name: "Kathy Everett",
      stars: 5,
      content:
        "We assisted our daughter in her search for a property in LA. She finally chose a Condo in the hot West LA marketplace this past year. My husband and I have moved a lot and purchased many homes over the years, so we know how to judge a good realtor. Mark was excellent from the start. He took time to listen to our daughter's criteria and budget. He was always working to find listings and available to make sure that she was able to get into a property in a timely manner. With the market so competitive, her offers were not always accepted and frequently had to compete with full cash offers. But Mark never gave up and encouraged her to continue the search. He helped her to not only find the right property but helped her with the offer negotiations and inspections. She is extremely happy with the result. We highly recommend Mark Mendez.",
    },
    {
      name: "Caesar Galiano",
      stars: 5,
      content:
        "My family and I purchased our next investment property in 2022 with Mark Mendez and we couldn't be happier with our experience. Since Mark is a real estate investor himself, he shared the years of knowledge he's acquired and helped us avoid very common mistakes. In addition, he helped us greatly on our existing investment property and took the time to explain everything from what and how to repair items that were damaged, shared his vendors who were amazing, and provided invaluable information on how to select a tenant. If you're an investor or first-time buyer, Mark can do it all.",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mb-16 flex w-screen flex-col justify-center lg:min-h-screen">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        customTransition="transform 1000ms ease-in-out"
        transitionDuration={1000}
        containerClass="flex items-center"
        removeArrowOnDeviceType={["mobile"]}
      >
        {reviews.map((review, index) => (
          <div key={index} className="p-4">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <FaQuoteLeft />
              <p className="my-2 text-sm leading-6 text-neutral-700">
                {review.content}
              </p>
              <div className="flex items-center justify-end">
                <FaQuoteRight />
              </div>
              <div className="mt-6 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-neutral-800">
                  <GoDash />
                  <span className="text-sm">{review.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(review.stars)].map((_, index) => (
                    <TbStarFilled key={index} className="h-6 w-6" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;
