import FlexFull from "~/components/buildingBlocks/flexFull";
import { labelStyles } from "..";
import StickyLabeledSection from "./stickyLabeledSection";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import ShiftingImages from "./shiftingImages";
import Wrap from "~/components/buildingBlocks/wrap";
import { PortfolioItem, Projects } from "./data";
import Box from "~/components/buildingBlocks/box";
import ShiftingPortfolioCard from "./shiftingPortfolioCard";

export default function IndexPortfolioSection() {
  const genImages = Array.from(
    { length: 17 },
    (_, i) => `/images/consciousness_ai/genArt${i + 1}.png`
  );

  return (
    <StickyLabeledSection
      labelText="portfolio"
      labelClassName={labelStyles}
      id="portfolio"
    >
      <FlexFull className="h-fit">
        <VStackFull className="h-fit" gap="gap-[5vh]">
          <Wrap className="w-full h-fit justify-center md:justify-around items-evenly gap-[6vh] py-[2vh]">
            {Projects.map((project, i) => (
              <Box
                className={`h-fit p-[2vh] ${i % 2 === 0 ? "" : "pt-[10vh]"}`}
              >
                <ShiftingPortfolioCard
                  key={i}
                  portfolioItem={project as PortfolioItem}
                />
              </Box>
            ))}
          </Wrap>
          <VStackFull className="h-fit">
            <FlexFull className="justify-center text-[4vh] text-cyan-300 textShadow">
              Generative AI Design
            </FlexFull>
            <FlexFull className="justify-center pt-[2vh]">
              <ShiftingImages
                containerClassName="border-970-md shadowBroadLooser"
                imageArray={genImages}
                shape="rectangle"
                imageDimensions="h-[80vh] w-[80vw]"
              />
            </FlexFull>
          </VStackFull>
        </VStackFull>
      </FlexFull>
    </StickyLabeledSection>
  );
}