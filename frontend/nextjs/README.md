# Sitecore JSS Next.js Sample Application

<!---
@TODO: Update to next version docs before release
-->
[Documentation (Experience Platform)](https://doc.sitecore.com/xp/en/developers/hd/22/sitecore-headless-development/sitecore-javascript-rendering-sdk--jss--for-next-js.html)

[Documentation (XM Cloud)](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-javascript-rendering-sdk--jss--for-next-js.html)

<!-- ------------------------------------------------- -->

# Music Event Frontend (Next.js + Sitecore JSS)

This is the frontend application for the Music Event Ticketing App.  
It is built with **Next.js**, **Sitecore JSS (Headless)**, and integrates with the backend **TicketService API** for ticket management.
The component fetch and display data from a SQL Server database via a .NET 6 API, and leverage Sitecore's dynamic placeholder concept to support flexible editing with multilanguage support.

---

## Project Structure
frontend/
│
├── NEXTJS/       #music-event-app Sitecore JSS Next.js app
│ ├── data/    #Stores local content data & run and test your app without connecting to Sitecore.
│ ├── SRC/           #contain Reusable UI components, pages, API services, Assets
│ ├── sitecore/      # Sitecore JSS config & routes
│ ├── package.json   # Dependencies
│ ├── next.config.js # Next.js config
│ └── ...

## Tech Stack

Next.js 15+
Sitecore JSS (Headless)


## Prerequisites
[Node.js (>=22.x)](https://nodejs.org/en/download/)
[npm (11.0.0)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

[Sitecore JSS CLI (22.9)]
npm install -g @sitecore-jss/sitecore-jss-cli

## Setup

cd music-event-app/frontend/NEXTJS

Install dependencies
npm install

## Running the App
Disconnected Mode (local JSON data, no Sitecore instance)
JSS start

Runs at: http://localhost:3000

## Ticket Counter Integration
The TicketCounter component fetches ticket availability from the backend and allows booking:

Fetch remaining tickets
GET /api/tickets/{id}

Book (decrement ticket)
POST /api/tickets/{id}/decrement