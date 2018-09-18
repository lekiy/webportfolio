import React, {Component} from 'react';


export default class Shenanijam2 extends Component {

    render() {
        return (
            <div>
                <img src="../src/images/slime-game-screenshot.png" className="ProfileImage DetailStyle Left" />
                <h3>Shenanijam 2 - Slime Crafting</h3>
                <p>
                    This was another of my game jam projects this time for the second Shenanijam hosted by award winning
                    game designers Butterscotch Shenanigans. This project was worked on over 48 hours and was produced using
                        <a href="http://www.yoyogames.com/" target="_blank">GamemakerStudio2</a> for the progamming and 
                    <a href="https://www.aseprite.org/" target="blank"> Aseprite</a> for the art.
                </p>
                <p>
                    For this game jam the theme that I had got was "Slimey Justice" so I decided to go for trying to make a crafting
                    style game focused around having the typical roles reversed for the main characters. In most games slimes are used as
                    a weak begining enemy for the player to face off agenst but for this game I had the player be the slimes trying
                    to show the human characters whos boss.
                </p>
                <p>
                    This game was my first real attempt at making a crafting game, so it posed many challenges for me. I've gotten used to
                    making games with randonly generate maps so I got that working pretty quickly so I had a nice top down island for which
                    the player would live. It got trickier once I started to add in the main resource collection mechanics. Since I couldnt
                    think of how to make a slime collecting stones and trees seem natural, I ended up making the main mechanic of the game
                    about holding down the mouse button on a target, and your slime would start to send out pieces of its self in order to
                    gather and collect the various items it would use for crafting. 
                </p>
                    <div className="CaptionContainer Right">
                        <img src="../src/images/slime.gif" className="CaptionImage" alt="Gif image of some gameplay"/>
                            Some gameplay mechanics
                    </div>
                <p>
                    This would create numerous problems do to the many
                    interactions that the objects in the game would have with each other, and how I choose to handle those problems.
                    when spawning each little piece of slime the "slimeling" as I called them had to figure out if it had to attack or destroy
                    something, pickup an item, or combine with another slime, and it was vary hard for me to keep track of what it was attempting
                    to do so I was never able to get results that felt vary good.
                </p>
                <p>
                    After a while of sorting out those mechanics, which also took most of my time for the game jam, I realized that I couldnt solve
                    the problem of why the slime needed to gather items in the first place, since it was not using items to collect things it had no
                    need for better tools or weapons which is the main game loop that crafting games tended to uses.
                </p>
                <p>
                    So after all the issues I fased with the over all design of the project and all the time lost to solving varios bugs. I ended up
                    with a game thats mostly just running around collecting sticks and killing npcs. but sometimes thats all someone can get out of a
                    game jam.
                </p>
                <p>You can play around with the prototype if you want by downloading it from my Itch.io</p>
                <a href="https://lekiy.itch.io/slimes-revenge" target="_blank" className="GameButton">Play it here</a>
            </div>
        );
    }

}
