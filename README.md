# Employee Directory – Modern HR Dashboard

A sleek, responsive, and interactive employee management dashboard built with **React 19** + **AG Grid**.  
Designed for HR teams, managers, and admin panels — with real-time search, dark/light mode toggle, summary stats, and a polished UI that stands out.

![Dashboard Preview](https://i.ibb.co.com/8XvJ5Kc/employee-directory-preview.jpg)  
*Light & Dark mode • Real-time search • Multi-page grid • Summary insights*

Live Demo → https://your-deploy-link.vercel.app (replace with your actual link)

## What's New & Different
- Clean, modern design with subtle gradients and glassmorphism
- Theme toggle (Light / Dark) with smooth transitions
- Live summary: Total employees & average salary in header
- 10 rows per page (feels more dynamic than 20)
- High-salary roles (≥$100k) highlighted in green
- Professional typography & spacing
- Fully responsive (mobile-ready)

## Features

| Feature                    | Description                                      |
|----------------------------|--------------------------------------------------|
| Interactive AG Grid        | Sort, filter, search, checkbox selection        |
| Global Search              | Instant filtering across all columns             |
| Dark / Light Mode          | Toggle with one click                            |
| Summary Stats              | Total headcount + average salary                 |
| Conditional Formatting     | Green for high salary & performance              |
| Clean Status Badges        | Active / Inactive with color coding           |
| Responsive Layout          | Works perfectly on tablets and phones            |

## Tech Stack

- **React 19** (with Hooks: `useState`, `useEffect`, `useMemo`)
- **AG Grid React** (Community Edition – fully featured)
- **Vanilla CSS** with CSS variables & modern gradients
- **Create React App** (or Vite – easy to migrate)
- **Static JSON data** (ready for API integration)

## Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/yourusername/employee-directory-dashboard.git
cd employee-directory-dashboard
npm install