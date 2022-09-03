import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { moonAuth } from "../config.json";
import axios from "axios";

// current datetime string in America/Chicago timezone
let chicago_datetime_str = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });

// create new Date object
let date_chicago = new Date(chicago_datetime_str);

// year as (YYYY) format
let year = date_chicago.getFullYear();

// month as (MM) format
let month = ("0" + (date_chicago.getMonth() + 1)).slice(-2);

// date as (DD) format
let date = ("0" + date_chicago.getDate()).slice(-2);

// date time in YYYY-MM-DD format
let date_time = year + "-" + month + "-" + date;


var data = JSON.stringify({
    format: "png",
    style: {
        moonStyle: "default",
        backgroundStyle: "solid",
        backgroundColor: "black",
        headingColor: "white",
        textColor: "white",
    },
    observer: {
        latitude: 30.7235263,
        longitude: -95.550777,
        date: `${date_time}`,
    },
    view: {
        type: "landscape-simple",
        orientation: "north-up",
    },
});

var config = {
    method: "post",
    url: "https://api.astronomyapi.com/api/v2/studio/moon-phase",
    headers: {
        Authorization: `${moonAuth}`,
        "Content-Type": "application/json",
    },
    data: data,
};

export const data = new SlashCommandBuilder()
    .setName("moon")
    .setDescription("Get Huntsville Moony Phase");
export async function execute(interaction) {
    await interaction.deferReply();
    axios(config)
        .then((response) => {
            const moonUrl = response.data.data;
            console.log(moonUrl);
            if (moonUrl.imageUrl) {
                const moonEmbed = new MessageEmbed()
                    .setColor("#F0386B")
                    .setTitle("Mooooony")
                    .setImage(moonUrl.imageUrl);
                return interaction.editReply({ embeds: [moonEmbed] });
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}