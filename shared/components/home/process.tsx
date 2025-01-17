import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Message from './Message'

const container = {
  hidden: { x: 0, y: 0 },
  show: {
    x: -50,
    y: [5, 10, 5, 0, -5, -10, -5, 0, 5, 10, 5, 10, 20],
    transition: {
      yoyo: Infinity,
      duration: 3,
    },
  },
  showAfter: {
    x: 10,
    y: [2, 3, 4, 3, 2, 0, -2, -3, -4, -2],
    transition: {
      yoyo: Infinity,
      duration: 2,
    },
  },
  showBefore: {
    x: 60,
    y: [2, 3, 4, 3, 2, 0, -2, -3, -4, -2],
    transition: {
      yoyo: Infinity,
      duration: 2,
    },
  },
  showNew: {
    x: -100,
    y: [2, 3, 4, 3, 2, 0, -2, -3, -4, -2],
    transition: {
      yoyo: Infinity,
      duration: 2,
    },
  },
}

const Process = () => (
  <section className="process bg-black-200 pt-10 min-h-screen lg:px-40 md:px-32 px-10">
    <div>
      <Fade up>
        <h1 className="text-white text-center font-medium text-4xl">
          How we work
        </h1>
      </Fade>
      <Bounce>
        <div>
          <Message
            color="baseBlue"
            message="Sketch me like one of your live projects!"
          />
        </div>
      </Bounce>
    </div>

    {/* ideation */}
    <div className="flex flex-wrap w-full mt relative">
      <div className="xl:w-3/6 lg:w-2/5 w-auto">
        <h1 className="text-white text-3xl lg:mt-5 mt-16">
          Ideation<span className="text-orange600 text-4xl">.</span>
        </h1>

        <p className="text-white text-lg my-4">
          Wonders happen as we single-mindedly put our soul on paper. Sketching
          our ideas is the perfect place to start. We take rejections like a
          boss until the final model gets drafted.
        </p>
        <img
          src="./images/bulb.png"
          className="w-5/6 h-auto z-10 -ml-16 -mt-10 lg:block hidden relative"
          draggable={false}
          alt="bulb"
        />
      </div>

      <InView>
        {({ inView, ref }) => (
          <div ref={ref} className="lg:mt-52 mt-24 mx-auto z-30">
            <div className="relative video transform -rotate-6 bg-orange300 md:w-72 md:h-72 sm:h-64 sm:w-64 h-52 w-52 items-center rounded-2xl z-40">
              <motion.div className="absolute h-full w-full transform rotate-6 bg-white -top-8 left-6 rounded-2xl">
                <div>
                  {inView && (
                    <video
                      autoPlay
                      className="h-full w-full mt-8"
                      src="./images/idea.mp4"
                    ></video>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </InView>

      {/* svg */}

      <motion.svg
        className="absolute top-2/3 -mt-28 z-0"
        width="1007"
        height="400"
        viewBox="0 0 1007 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          variants={container}
          initial="hide"
          animate="show"
          cx="857"
          cy="150"
          r="149.5"
          stroke="#FFFBFB"
        />
        <motion.path
          variants={container}
          initial="hide"
          animate="show"
          d="M951 72.5C965.5 92.8333 988.4 146 964 196"
          stroke="#FFFBFB"
          stroke-linejoin="round"
        />
        <motion.path
          variants={container}
          initial="hide"
          animate="show"
          d="M956 210C953.989 214.469 947.974 223.527 940 224"
          stroke="#FFFBFB"
        />
        <motion.circle
          variants={container}
          initial="hide"
          animate="show"
          cx="858"
          cy="228"
          r="10.5"
          stroke="#FFFBFB"
        />
        <motion.circle
          variants={container}
          initial="hide"
          animate="showAfter"
          cx="191"
          cy="190"
          r="10.5"
          stroke="#FFFBFB"
        />
        <motion.circle
          variants={container}
          initial="hide"
          animate="show"
          cx="65"
          cy="204"
          r="10.5"
          stroke="#FFFBFB"
        />
        <motion.circle
          variants={container}
          initial="hide"
          animate="showNew"
          cx="689.5"
          cy="234.5"
          r="17"
          stroke="#FFFBFB"
        />
        <motion.circle
          variants={container}
          initial="hide"
          animate="showBefore"
          cx="17.5"
          cy="259.5"
          r="17"
          stroke="#FFFBFB"
        />
        <motion.circle
          variants={container}
          initial="hide"
          animate="show"
          cx="125.5"
          cy="227.5"
          r="17"
          stroke="#FFFBFB"
        />
      </motion.svg>

      {/* bubble end */}
    </div>
    {/* ideation end */}

    {/* design */}
    <Bounce delay={500}>
      <div className="lg:mt-0 sm:mt-24 mt-14">
        <Message
          color="baseBlue"
          message="2040 just called; they said they want their design back."
        />
      </div>
    </Bounce>

    <div className="flex flex-wrap w-full mt-52 relative">
      <div className="xl:w-3/6 lg:w-2/5 w-auto">
        <InView>
          {({ inView, ref, entry }) => (
            <div ref={ref}>
              <Slide right>
                <div className="lg:-mt-20 mt-16">
                  <span className="text-white text-3xl relative lg:mt-24">
                    Design<span className="text-orange600 text-4xl">.</span>
                    <img
                      src="./images/arrow.png"
                      className="absolute top-full left-full h-5 transform -translate-y-2"
                      alt="arrow"
                    />
                  </span>
                </div>
              </Slide>

              <p className="text-white text-lg my-4">
                Getting our creative juices flowing helps us create magnificent
                designs. The design puts flesh and blood to the existing idea.
                These designs help turn our dreams into reality.
              </p>

              <div>
                {inView && (
                  <video
                    src="./images/pendrop.mp4"
                    className="w-full mt-16 mx-auto"
                    autoPlay
                  />
                )}
              </div>
            </div>
          )}
        </InView>
      </div>
      <InView>
        {({ inView, ref, entry }) => (
          <div className="mt-24 lg:block hidden z-20 h-96" ref={ref}>
            {inView && (
              <div>
                <video
                  className="w-96 z-30 h-auto xl:ml-16 ml-10 mt-0 border-orange600 border-8 rounded-2xl"
                  src="./images/draw.mp4"
                  autoPlay
                />
              </div>
            )}
          </div>
        )}
      </InView>

      <motion.svg
        className="absolute top-2/3 -mt-28 z-0"
        width="1007"
        height="400"
        viewBox="0 0 1007 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          variants={container}
          initial="hide"
          animate="show"
          cx="857"
          cy="150"
          r="149.5"
          stroke="#FFFBFB"
        />
        <motion.path
          variants={container}
          initial="hide"
          animate="show"
          d="M951 72.5C965.5 92.8333 988.4 146 964 196"
          stroke="#FFFBFB"
          stroke-linejoin="round"
        />
        <motion.path
          variants={container}
          initial="hide"
          animate="show"
          d="M956 210C953.989 214.469 947.974 223.527 940 224"
          stroke="#FFFBFB"
        />
        <motion.circle
          variants={container}
          initial="hide"
          animate="show"
          cx="858"
          cy="228"
          r="10.5"
          stroke="#FFFBFB"
        />
        <motion.circle
          variants={container}
          initial="hide"
          animate="showAfter"
          cx="191"
          cy="190"
          r="10.5"
          stroke="#FFFBFB"
        />
        <motion.circle
          variants={container}
          initial="hide"
          animate="show"
          cx="65"
          cy="204"
          r="10.5"
          stroke="#FFFBFB"
        />
        <motion.circle
          variants={container}
          initial="hide"
          animate="showNew"
          cx="689.5"
          cy="234.5"
          r="17"
          stroke="#FFFBFB"
        />
        <motion.circle
          variants={container}
          initial="hide"
          animate="showBefore"
          cx="17.5"
          cy="259.5"
          r="17"
          stroke="#FFFBFB"
        />
        <motion.circle
          variants={container}
          initial="hide"
          animate="show"
          cx="125.5"
          cy="227.5"
          r="17"
          stroke="#FFFBFB"
        />
      </motion.svg>
    </div>
    {/* design end */}

    <div className="lg:mt-auto sm:mt-16 mt-10">
      <Bounce>
        <Message
          color="orange300"
          message="404 does not exist on our number line."
        />
      </Bounce>
    </div>

    <div className="flex flex-wrap w-full -mt-10">
      <div className="xl:w-3/6 lg:w-2/5 -mt-5 w-auto">
        <h1 className="text-white text-3xl mt-24">
          Technical<span className="text-orange600 text-4xl">.</span>
        </h1>

        <div className="text-white text-lg my-4">
          <p className="text-xl font-semibold">Robust Code</p>
          <p className="text-lg font-normal">
            We go through endless debugging to ensure our code can withstand a
            storm.
          </p>
        </div>

        <div className="text-white text-lg my-4">
          <p className=" text-xl font-semibold">Spick and Span</p>
          <p className="text-lg font-normal">
            We ensure that we follow the best practices for every project.
            Sticking to convention and arranging our work as a beautiful cheese
            platter is a priority for us.
          </p>
        </div>

        <div className="text-white text-lg my-4">
          <p className="text-xl font-semibold">Open source projects</p>
          <p className="text-lg font-normal">
            Edit and create something of your own from our Github repositories.
          </p>
        </div>
      </div>
      <InView>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className="lg:mt-24 lg:w-1/2 w-auto mt-0 md:mb-24 mb-14"
          >
            {inView && (
              <video
                src="./images/technical.mp4"
                className="lg:w-3/4 w-screen lg:ml-24 sm:mx-auto mx-auto lg:mt-0 mt-16"
                autoPlay
              />
            )}
          </div>
        )}
      </InView>
    </div>
  </section>
)

export default Process
