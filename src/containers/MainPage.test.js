import {shallow} from "enzyme";
import React from "react";
import MainPage from "./MainPage";
import {findByTestAttr} from "../utils";
import toJson from "enzyme-to-json";


const setUp = ( props = {}) => {
    const component = shallow(<MainPage {...props}/>);

    return component;
}

describe('Video Player', function () {
    describe('renders', function () {
        let wrapper;
        beforeEach(()=>{
            const props = {};
            wrapper = setUp(props);
        })

        it('should render without crashing', function () {
            const component = findByTestAttr(wrapper, "mainPageComponent");
            expect(component).toHaveLength(1);
        });

        it('should match snapshot', function () {
            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });
});