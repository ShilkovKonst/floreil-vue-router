/*function to slow appearance of link in cards to prevent their unexpected activation*/
// const cards = document.getElementsByClassName('card');

// let ishovering = false;
// for (const card of cards) {
//         card.addEventListener('mouseover', () => { ishovering = true; });
//         card.addEventListener('mouseleave', () => { ishovering = false; });
//         console.log(ishovering);
// }


// function linkToggler(a) {
//         const links = a.getElementsByClassName('card_text_link');
//         for (const link of links) {
//                 console.log(ishovering);
//                 setTimeout(() => { link.classList.toggle('d-none'); }, 200);
//         }
// }

// for (const card of cards) {
//         card.addEventListener('mouseenter', () => {
//                 if (ishovering) {
//                         card.addEventListener('mouseenter', linkToggler(card));
//                 }
//         });
//         card.addEventListener('mouseleave', () => {
//                 if (!ishovering) {
//                         card.addEventListener('mouseleave', linkToggler(card));
//                 }
//         });
// }

/*functions to change sizes of icons, gap and <a>-tags in prefooter to fit the size of screen + change list style between column and row in footer's first section*/
const social = document.getElementById('social');
const social_buttons = social.getElementsByClassName('social_buttons');
const social_icons = social.getElementsByClassName('social_icons');

const footer_list = document.getElementById('footer_list');


let window_width = innerWidth;

mainFunction();
window.addEventListener('resize', () => {
        window_width = innerWidth;
        mainFunction();
});
function mainFunction() {
        if (window_width < 576) {
                toggleGap3to1();
                toggleMediumToSmall();
                toggleLg_To_1x();

                changeListHorToVert();
        }
        else {
                toggleGap1to3();
                toggleSmallToMedium();
                toggle1x_To_Lg();

                changeListVertToHor();
        }
}
function toggleLg_To_1x() {
        for (const social_icon of social_icons)
                if (social_icon.classList.contains('fa-lg'))
                        toggleIcons(social_icon);
}
function toggle1x_To_Lg() {
        for (const social_icon of social_icons)
                if (social_icon.classList.contains('fa-1x'))
                        toggleIcons(social_icon);
}
function toggleIcons(a) {
        a.classList.toggle('fa-lg');
        a.classList.toggle('fa-1x');
}
function toggleSmallToMedium() {
        for (const social_button of social_buttons)
                if (social_button.classList.contains('small'))
                        toggleSize(social_button);
}
function toggleMediumToSmall() {
        for (const social_button of social_buttons)
                if (social_button.classList.contains('medium'))
                        toggleSize(social_button);
}
function toggleSize(b) {
        b.classList.toggle('medium');
        b.classList.toggle('small');
}

function toggleGap3to1() {
        if (social.classList.contains('gap-3')) {
                social.classList.toggle('gap-3');
                social.classList.toggle('gap-1');
        }
}
function toggleGap1to3() {
        if (social.classList.contains('gap-1')) {
                social.classList.toggle('gap-3');
                social.classList.toggle('gap-1');
        }
}

function changeListHorToVert() {
        if (footer_list.classList.contains('list-group-horizontal')) {
                footer_list.classList.toggle('list-group-horizontal');
        }
        if (footer_list.classList.contains('gap-5')) {                
                footer_list.classList.toggle('gap-1');
                footer_list.classList.toggle('gap-5');
        }

}
function changeListVertToHor() {
        if (!footer_list.classList.contains('list-group-horizontal')) {
                footer_list.classList.toggle('list-group-horizontal');
        }
        if (footer_list.classList.contains('gap-1')) {
                footer_list.classList.toggle('gap-1');
                footer_list.classList.toggle('gap-5');
        }
}


/*functions to rotate icons in footer's nav-toggler*/

// const nav_toggler_footer = document.getElementById('collapse_toggler_footer');
// const ntf_icons = nav_toggler_footer.getElementsByClassName('fa-angle-down');
// nav_toggler_footer.addEventListener('click', () => {
//         for (const ntf_icon of ntf_icons) {
//                 ntf_icon.classList.toggle('rotatable_z_0');
//                 ntf_icon.classList.toggle('rotatable_z_180');
//         }

// });
/*functions to rotate icon in header's nav-toggler*/

// const nav_toggler_header = document.getElementById('collapse_toggler_header');
// const nth_icons = nav_toggler_header.getElementsByClassName('fa-bars');
// nav_toggler_header.addEventListener('click', () => {
//         for (const nth_icon of nth_icons) {
//                 nth_icon.classList.toggle('rotatable_z_0');
//                 nth_icon.classList.toggle('rotatable_z_90');
//         }
// });

/* general function for rotate icons in elements based on classes, so it has to be starter rotation class on the icons and others in css */
function iconSpinner(a, b, c , d) {
        const elem = document.getElementById(a);
        const elem_icons = elem.getElementsByClassName(b);
        elem.addEventListener('click', () => {
                for (const elem_icon of elem_icons) {
                        elem_icon.classList.toggle(c);
                        elem_icon.classList.toggle(d);
                }
        });
}
iconSpinner('collapse_toggler_header', 'fa-bars', 'rotatable_z_0', 'rotatable_z_90');
iconSpinner('collapse_toggler_footer', 'fa-angle-down', 'rotatable_z_0', 'rotatable_z_180');