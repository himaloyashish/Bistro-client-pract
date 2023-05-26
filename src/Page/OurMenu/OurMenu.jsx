import React from 'react';
import SectionTitle from '../../shared/sectionTitle/SectionTitle';
import Cover from '../../shared/Cover/Cover';
import img from '../../assets/menu/banner3.jpg'
import { Helmet } from 'react-helmet-async';
import useMenu from '../../Hook/useMenu';
import MenuCategory from '../../shared/MenuCategory/MenuCategory';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import soup from '../../assets/menu/soup-bg.jpg';

const OurMenu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item=>item.category=== 'dessert')
    const soup = menu.filter(item=>item.category=== 'soup')
    const salad = menu.filter(item=>item.category=== 'salad')
    const pizza = menu.filter(item=>item.category=== 'pizza')
    const drinks = menu.filter(item=>item.category=== 'drinks')
    const offered = menu.filter(item=>item.category=== 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover image={img} title={'Our Menu'}></Cover>
            <SectionTitle subheading={"Don't miss "}
            heading={'Todays offer'}
            >
            </SectionTitle>
            <MenuCategory item={dessert} title={'dessert'} img={dessertImg}></MenuCategory>

        </div>
    );
};

export default OurMenu;