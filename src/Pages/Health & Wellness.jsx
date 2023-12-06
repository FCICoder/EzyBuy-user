import React from "react";
import DropDownService from "../Components/Reusable/DropDownService/DropDownService";
import DropDownList from "../Components/Reusable/DropDownList/DropDownList";
import HelpfulLinks from "../Components/Reusable/HelpfulLinks/HelpfulLinks";
import CardElem from "../Components/Reusable/CardElem/CardElem";
import CircleCat from "../Components/Reusable/CircleCat/CircleCat";
import CarouseForglasses from "../Components/Reusable/CarouseForglasses/CarouseForglasses";
const HealthWellness = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <p className="fs-5 mb-3">Health & Wellness</p>
            <hr />
            <DropDownService
              icon="FaPrescriptionBottleMedical"
              name="Pharmacay"
            />
            <hr />
            <DropDownService
              icon="FaPrescriptionBottleMedical"
              name="Vision Center"
            />
            <hr />
            <DropDownService
              icon="FaPrescriptionBottleMedical"
              name="Walmart Health"
            />
            <hr />
            <DropDownService
              icon="FaPrescriptionBottleMedical"
              name="Insurance Services"
            />
          </div>
          <div className="col-lg-9">
            <p className="fs-5 ms-5">Vision Center</p>
            <div className="d-flex mt-3">
              <div className="ms-5">
                <CardElem
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-b62b/k2-_a214f5f2-2aaa-45a5-ba00-8bb4cdd0361b.v1.jpg"
                  h="Shop online or in-store"
                  p="Browse our selection of eyewear."
                />
              </div>
              <div className="ms-5">
                <CardElem
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-3da6/k2-_3391483c-8ff7-445e-99bb-91952d3f1b9f.v1.jpg"
                  h="Contact lenses"
                  p="Order today for speedy delivery."
                />
              </div>
            </div>
            <div className="">
              <p className="fs-5 ms-5 mt-3">Vision Center eyewear</p>
              <div className="d-flex row mt-3 ms-4  ">
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-71f8/k2-_82884711-6f12-48ec-800c-14a6ddc1d913.v1.jpg?"
                  name="Top sellers"
                />
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-794f/k2-_30230802-2288-42ad-b1fa-0b8378b97873.v1.jpg?"
                  name="Eyeglass frames"
                />
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-ca07/k2-_ed3a0879-d62e-4ce7-8390-d8340da94f38.v1.jpg?"
                  name="Sunglass frames"
                />
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-98ab/k2-_97901826-6540-4478-a762-739ffa3160ec.v1.jpg?"
                  name="Contacts"
                />
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-733f/k2-_3fbe220f-80ab-4b8b-80cd-6c3267b6a538.v1.jpg?"
                  name="Eyewear accessories"
                />
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-bd18/k2-_20ae89d5-9c7b-43d2-9a6b-416299ea5adb.v1.jpg?"
                  name="All eyewear"
                />
              </div>
              <hr className="ms-5" />
            </div>
            <div className="ms-3">
              <p className="fs-5 mb-2">New arrivals</p>
              <p className="mb-5 text-muted">Prive Revaux now available at Walmart.</p>
              <CarouseForglasses className="mt-5"
                lgCount={6}
                mdCount={6}
                smCount={3}
                count={12}
                slideCount={3}
                products={[
                  {
                    src: "https://i5.walmartimages.com/seo/Prive-Revaux-The-Heat-Silver-Grey-Sunglasses_da61e146-4367-4184-8576-2ad2ed6c5b69.60deab3b1f82301213f282b3565843f9.jpeg",
                    price: "$39.00",
                    title: "Prive Revaux The Heat, Silver Grey, Sunglasses",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/Prive-Revaux-Lifestyle-Blue-Havana-Sunglasses_70438623-9e66-4260-bab8-bdea5885eb74.47a2570cecd8da0cbc407bdb509221bb.jpeg",
                    price: "$39.00",
                    title: "Prive Revaux Lifestyle, Blue Havana, Sunglasses",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/Prive-Revaux-The-Floridian-Gold-Sunglasses_bb451516-98ed-4e6b-9f24-600e3086d660.a9b95ec9eff7b5e2777d9ed7c0d7aadb.jpeg",
                    price: "$39.00",
                    title: "Prive Revaux The Floridian, Gold, Sunglasses",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/Prive-Revaux-Neptune-Blue-Havana-Sunglasses_a2a00cae-632b-42fc-a153-474ee3ac42f0.1d2df01322d7a4cee38b5360ee40014c.jpeg",
                    price: "$39.00",
                    title: "Prive Revaux Neptune, Blue Havana, Sunglasses",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/Prive-Revaux-The-Bruce-2-0-Men-s-Navigator-Havana-Sunglasses_552c336d-1481-4cf0-ad35-3efc2bd56d55.757ed73e11520a3c28c3ebc12b928d38.jpeg",
                    price: "$39.00",
                    title:
                      "Prive Revaux The Bruce 2.0, Men's, Navigator, Havana, Sunglasses",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/Prive-Revaux-To-Collins-Red-Sunglasses_06552097-acff-465b-94eb-67dcd3db5c82.e878864148677f7772659ccb7381cbb9.jpeg",
                    price: "$39.00",
                    title: "Prive Revaux To Collins, Red, Sunglasses",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/Prive-Revaux-Victoria-Women-s-Cateye-Havana-Sunglasses_4b27ed8d-d6b0-49c8-927b-31c2937b7d9f.c7ffe11214a1b7b189af9a4dd83d760f.jpeg",
                    price: "$39.00",
                    title:
                      "Prive Revaux Victoria, Women’s, Cateye, Havana Sunglasses",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/Prive-Revaux-Casino-Nights-Silver-Sunglasses_4a73ec52-0972-44aa-b4eb-ed1d0c4f9e51.dba8e037afcbc6fae31ecf12464751b3.jpeg",
                    price: "$39.00",
                    title: "rive Revaux Casino Nights, Silver, Sunglasses",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/Prive-Revaux-The-Cuervo-Gold-Sunglasses_f6a90871-a094-425b-bcac-235a4932f093.cfd1b9b3bd9415375be5df5a9829d367.jpeg",
                    price: "$39.00",
                    title: "Prive Revaux The Cuervo, Gold, Sunglasses",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/Prive-Revaux-Harmony-Black-Sunglasses_b4255e42-86f1-40d3-91e1-f4e2be74639c.cc75264b34ab092a2cd611d1dc0e6313.jpeg",
                    price: "$39.00",
                    title: "Prive Revaux Harmony, Black, Sunglasses",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/Prive-Revaux-The-Ollie-Havana-Sunglasses_11bf78f4-5116-4802-8663-b4e9ee9f6b17.2c4fa04c539c10076e7691197f0892ff.jpeg",
                    price: "$39.00",
                    title: "Prive Revaux The Ollie, Havana Sunglasses",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/Prive-Revaux-The-Bobby-Unisex-Aviator-Black-Sunglasses_f70f9fdc-d6c5-4b6c-95cf-a4041787dd0c.b0fccc264b9510dca79a012fc724fc9f.jpeg",
                    price: "$39.00",
                    title:
                      "Prive Revaux The Bobby, Unisex, Aviator, Black Sunglasses",
                  },
                ]}
              />
            </div>
            <div className="mt-4">
              <h5 className="font-weight-bold mb-3">Find your frames</h5>
              <div className="d-flex flex-wrap flex-md-nowrap gap-3 align-items-center  justify-content-around ">
                <CardElem
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-6811/k2-_4e428ad0-4c93-4cbd-a0f0-a4df781ec505.v1.jpg"
                  h="Under $35"
                  p="Stylish picks for lots less."
                />
                <CardElem
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-5ba6/k2-_178f12b4-7027-4d42-a4cf-3f93a78e8856.v1.jpg"
                  h="Under $60"
                  p="See what we've got our eye on."
                />
                <CardElem
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-ce3b/k2-_8e08134e-7b50-4549-b38d-c4f1279dbdd0.v1.jpg"
                  h="Designer finds"
                  p="Names you know & you'll love."
                />
              </div>
            </div>
            <div className="ms-3">
              <p className="fs-5 mb-2">New arrivals</p>
              <p className="mb-5 text-muted">Have them sent straight to your home, or try them on at your local Vision Center.</p>
              <CarouseForglasses className="mt-5"
                lgCount={6}
                mdCount={6}
                smCount={3}
                count={12}
                slideCount={3}
                products={[
                  {
                    src: "https://i5.walmartimages.com/seo/M-Plano-Blue-Light-Lens-Injection-Mens-Frames-Alex-Black-52-5-16-5-138-with-Case_c79928fb-af71-4ba7-9bd4-99a2b4ac3112.72bb1bddc0d7f848165853cf9465084f.jpeg",
                    price: "$16.68",
                    title:
                      "M+ Plano Blue Light Lens Injection Mens Frames, Alex, Black, 52.5 - 16.5 - 138, with Case",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/M-Plano-Blue-Light-Lens-Injection-Unisex-Frames-Micah-Black-Crystal-Gradient-50-0-20-5-140-with-Case_14345bc2-211e-44f1-97f2-0ea990377486.18a88e9166dae2108e433750fb01a136.jpeg",
                    price: "$16.68",
                    title:
                      "M+ Plano Blue Light Lens Injection Unisex Frames, Micah, Black Crystal Gradient, 50.0 - 20.5 - 140, with Case",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/Harper-Roe-Eyewear-Hr1004wm-200_e83571fb-d5c8-4adc-ac9f-0adb0ff37ec3.6dd6586df43384b25d38a47f0cf23f73.jpeg",
                    price: "$28.00",
                    title: "Harper & Roe Eyewear Hr1004wm 200",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/Harper-Roe-Eyewear-Hr3002wm-001_cf917081-b078-4daf-b6c6-cbb0930e8ee8.26ac24ec7c009de1bb1652ccaaa5663c.jpeg",
                    price: "$28.00",
                    title: "Harper & Roe Eyewear Hr3002wm 001",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/Harper-Roe-Eyewear-Hr3004wm-200_dddd73d1-b3bf-4c35-b7a1-af0988a3b813.f120912699b6e758614ccdad27082fd0.jpeg",
                    price: "$28.00",
                    title: "Harper & Roe Eyewear Hr3004wm 200",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/M-Plano-Blue-Light-Lens-Injection-Womens-Frames-Ellie-Grey-Tortoise-53-0-15-0-132-with-Case_4a7dd973-0d15-45bf-9126-3889e979bb47.174b02d9cc25036e5b06db224714ba3b.jpeg",
                    price: "$16.68",
                    title:
                      "M+ Plano Blue Light Lens Injection Womens Frames, Ellie, Grey Tortoise, 53.0 - 15.0 - 132, with Case",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/Prive-Revaux-Victoria-Women-s-Cateye-Havana-Sunglasses_4b27ed8d-d6b0-49c8-927b-31c2937b7d9f.c7ffe11214a1b7b189af9a4dd83d760f.jpeg",
                    price: "$48.00",
                    title: "Oscar Eyewear O1309wm 215",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/Solara-Jasper-Gmtl-1-5-Sunreader-Modular-2017_3fcaf04f-a6ad-4e3b-b2a8-6ffe447d8029.b68640a250e339561f0bc1867a62f4ff.jpeg",
                    price: "$14.88",
                    title: "Solara Jasper Gmtl 1.5 Sunreader Modular 2017",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/M-Plano-Blue-Light-Lens-Injection-Unisex-Frames-Parker-Grey-Crystal-51-0-21-0-141-with-Case_3b6f115f-9257-4b86-9714-5b9a7bc67945.f8f11c289ec373036edf9fb9cc4b28fb.jpeg",
                    price: "$16.68",
                    title:
                      "M+ Plano Blue Light Lens Injection Unisex Frames, Parker, Grey Crystal, 51.0 - 21.0 - 141, with Case",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/Mix-Tort-2-0-Sunreader-Modular-2017_b6a40aac-6114-4da4-8361-40647a974680.18118512b58481905333d669273d18df.jpeg",
                    price: "$14.88",
                    title: "Mix Tort 2.0 Sunreader Modular 2017",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/M-Plano-Blue-Light-Lens-Injection-Unisex-Frames-Lee-Tortoise-52-0-17-0-138-with-Case_da9a1145-51a5-486f-9d9f-82694cd7ccba.d596229e1ad9b5c5dd983efed7c21955.jpeg",
                    price: "$15.67",
                    title: "Solar Shield Dioptics Rectangle Black Sunglasses",
                  },
                  {
                    src: "https://i5.walmartimages.com/seo/Solara-Baseline-Gmtl-1-5-Sunreader-Modular-2017_8791473a-7ee8-4d5e-ad57-875df1c0d574.37658512003579030263b1afda96571d.jpeg",
                    price: "$15.67",
                    title: "Solar Shield Dioptics Rectangle Blue Clip Ons",
                  },
                ]}
              />
            </div>
            <hr />
            <div className="">
              <p className="fs-5 ms-5 mt-3">Vision Center eyewear</p>
              <div className="d-flex row mt-3 ms-4  ">
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-73f9/k2-_8ad5c1dc-af41-4b77-8040-1b564642158c.v1.jpg"
                  name="Glasses frames"
                />
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-ba9d/k2-_ef35c9d3-df1c-4ef5-b9db-3c38e9e4c6cc.v1.jpg"
                  name="Sunglasses"
                />
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-500d/k2-_ee568d85-6ae3-4735-ae88-86e377361538.v1.jpg"
                  name="Eyewear accessories"
                />
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-2752/k2-_caa41357-193b-4226-a7e1-7cfaf243ee3a.v1.jpg"
                  name="Computer & reading glasses"
                />
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-cce6/k2-_a3331e84-8388-4d87-9d0b-c30c20a0df52.v1.jpg"
                  name="Eye care"
                />
                <CircleCat
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-6877/k2-_8beb7094-aa1e-4859-b31c-082edba3274a.v1.jpg"
                  name="FSA/HSA Shop"
                />
              </div>
              <hr className="ms-1" />
            </div>
            <div className="ms-5">
              <p className="fs-5">FAQ</p>
              <hr />
              <DropDownList
                h="Can I try glasses on virtually?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="How do I order prescription eyewear online?"
                p="You can browse for prescription glasses online at 
                Walmart & try your favorite pairs on virtually to see how 
                they look on you. Next, you’ll customize your lenses to your 
                needs & upload your prescription. Then you’ll measure your 
                pupillary distance with our digital tool for a good fit.
                 From there, just add your glasses to cart & check out."
              />
              <hr />
              <DropDownList
                h="Where can I find my frame’s size?"
                p="You can browse for prescription glasses online at 
                Walmart & try your favorite pairs on virtually to see how 
                they look on you. Next, you’ll customize your lenses to your 
                needs & upload your prescription. Then you’ll measure your 
                pupillary distance with our digital tool for a good fit.
                 From there, just add your glasses to cart & check out."
              />
              <hr />
              <DropDownList
                h="Can I order contact lenses?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="Do I need a prescription from my doctor to order?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="What if I don’t have a copy of my prescription?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="Can I add a new prescription if I used the wrong one?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="I don’t know my pupillary distance. How can I get it?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="What payment methods can I use?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="Can I use my insurance to order?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="Can I use my FSA/HSA to order?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="Are there any special discounts or promotions?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="How can I track my order?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="How long will it take to receive my order?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="What do I do if there’s a problem with my glasses?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="What if I want to return my glasses?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="What do I do if my order was canceled due to an issue?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
              <DropDownList
                h="How do I get my glasses to fit correctly?"
                p="Yes. When browsing for frames, use the 'Virtual preview' filter 
              to them on virtually. Open on the item that you'd like to try on in
               real time, then select Try them on using your device's camera. If 
               you like the frames, you can select your lenses & proceed with
                ordering your new glasses."
              />
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthWellness;
