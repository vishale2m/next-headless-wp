"use client";
import React, { useEffect, useState } from "react";
import Button from "./button";
const GRAPHQL_ENDPOINT = "http://localhost:8888/custom-theme/graphql";

export function Header() {
  const [headerData, setHeaderData] = useState({
    siteLogo: null,
    navbarButton: null
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(GRAPHQL_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            query NewQuery {
              globalOptions {
                themeOptions {
                  header {
                    siteLogo {
                      node {
                        altText
                        sourceUrl
                      }
                    }
                    navbarButton {
                      target
                      title
                      url
                    }
                  }
                }
              }
            }
          `
        }),
      });
      const json = await res.json();
      const headerOptions = json?.data?.globalOptions?.themeOptions?.header;
      setHeaderData({
        siteLogo: headerOptions?.siteLogo?.node,
        navbarButton: headerOptions?.navbarButton
      });
    }
    fetchData();
  }, []);

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-row">
          <div className={`site-logo ${isMenuOpen ? 'logo-active' : ''}`}>
            <a href="/" className="site-logo-link">
              {headerData.siteLogo ? (
                <img
                  src={headerData.siteLogo.sourceUrl}
                  alt={headerData.siteLogo.altText || "Site Logo"}
                />
              ) : (
                <span></span>
              )}
            </a>
          </div>
          <div className={`navbar ${isMenuOpen ? 'active' : ''}`}>
            <ul className="navbar-nav">
              <li className="navbar-nav-item">
                <a href="/" className="navbar-nav-link">Home</a>
              </li>
              <li className="navbar-nav-item">
                <a href="/about" className="navbar-nav-link">About</a>
              </li>
              <li className="navbar-nav-item">
                <a href="/gallery" className="navbar-nav-link">Gallery</a>
              </li>
              <li className="navbar-nav-item">
                <a href="/news" className="navbar-nav-link">News</a>
              </li>
              <li className="navbar-nav-item">
                <a href="/contact" className="navbar-nav-link">Contact</a>
              </li>
            </ul>
            {headerData.navbarButton && (
              <Button
                href={headerData.navbarButton.url}
                target={headerData.navbarButton.target || "_self"}
              >
                {headerData.navbarButton.title}
              </Button>
            )}
          </div>
          <div className={`toggle-menu ${isMenuOpen ? 'toggle-active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}