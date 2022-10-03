import SelectedWork from "../../components/Work/SelectedWork";
import WorksBanner from "../../assets/images/Selected Works Card Bg.png";

const SelectedWorks = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row text-[#e5e5e5] pb-[2rem] w-[90%] max-w-[1200px] mt-16 m-auto px-10 xxl:pt-[3rem]">
      <div className="left lg:w-[70%] items-center lg:mr-12 mt-10 lg:mt-0">
        <img src={WorksBanner} alt="" />
        <div className="flex justify-between items-center mt-10">
          <SelectedWork
            title={
              <h3 className="text-[3rem] lg:text-[3.25rem] font-semibold uppercase w-[70%] break-all leading-[3rem]">
                <span className="block">Beef</span>
                <span>ness</span>
              </h3>
            }
            year="2022"
            className="bg-red-600 w-[48%]"
          />
          <SelectedWork
            title={
              <h3 className="text-[3rem] lg:text-[3.25rem] font-semibold uppercase w-[70%] break-all leading-[3rem]">
                <span className="block">Boo</span>
                <span>kly</span>
              </h3>
            }
            year="2022"
            className="bg-yellow-500 w-[48%]"
          />
        </div>
      </div>

      <div className="right lg:w-[30%] flex flex-col items-center">
        <div>
          <h2 className="uppercase text-[1.5rem] lg:text-[3rem] font-semibold w-full lg:w-[30%] leading-[3rem] mb-4">
            Selected Works
          </h2>
          <p className="text-[#929294] font-medium">
            Let's get a deeper look at the challenges we overcome daily to
            create success stories for brands.
          </p>
        </div>
        <SelectedWork
          rotate
          title={
            <h3 className="text-[3.5rem] lg:text-[5rem] font-semibold uppercase w-full">
              Positive
            </h3>
          }
          year="2021"
          className=" bg-[#ea8113] w-[300px] h-full mt-8"
        />
      </div>
    </section>
  );
};

export default SelectedWorks;
