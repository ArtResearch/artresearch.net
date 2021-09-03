  describe('Start page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:10224/resource/start')
    })
    
    it('Checks if all elements are present', () => {
      cy.get('.search-actions').children().should('have.length', 3) 
      cy.get('.search-actions').children().should('have.length', 3) 
      cy.get('section[title="Browse the collections"] .section-body .tall-card-list').children().should('have.length', 4)
      cy.get('section[title="About"] .section-body .text-with-image').children().should('have.length', 2)
      cy.get('section[title="Collection Spotlights"] .section-body .grid-card-list').children().should('have.length', 8)
      cy.get('section[title="Contextualized & connected histories"] .section-body .text-with-image.column').children().should('have.length', 2)
      cy.get('section[title="Contextualized & connected histories"] .section-body .text-with-image.column .info-circle-container').children().should('have.length', 5)
      cy.get('section[title="Contextual search examples"] .section-body .bubble-card-list').children().should('have.length', 4)
      cy.get('section[title="Compare images with deep zoom"] .section-body .mirador-container').children().should('have.length', 2)
      cy.get('section[title="Explore visually similar artworks"] .section-body #featured-selections').children().should('have.length', 10)
      cy.get('section[title="Reconciling entities"] .section-body .just-image').children().should('have.length', 1)
      cy.get('section[title="Reconciled artworks"] .section-body .infiniteCarousel .images').children().should('have.length', 11)
    })
  })


  describe('Start page links & basic content for each', () => {
    beforeEach(() => {
        cy.visit('http://localhost:10224/login')
        cy.get('input[name="username"]').click().type("admin")
        cy.get('input[name="password"]').click().type("admin")
        cy.get('input[type="submit"]').click().url().should('eq', 'http://localhost:10224/resource/start') 
    })
    
    it('Simple search works', () => {
        cy.get('input[type="search"]').click().type("test")
        cy.get('button[type="submit"]').click().url().should('eq', 'http://localhost:10224/resource/start?withimages=false&selectedTab=Artworks&keyword=test&uri=Default%3ASearchSimple&semanticSearch=N4IgZiBcDaC6A0IBOBTAzgVwDYBcrAF9EATAQx1LRRzSjkVKwEsBzAOwFsU29JQAVKCAAi5UgDoAsqQCeAIxQhEANXwEiIFklIAHABYBlAMYB7HSgMpSSI3vwhBkEWKmyFSkKr7qCQA') 
        cy.contains("Search")
        cy.contains("Artworks")
        cy.contains("Photographs")
        cy.contains("Artists")
        cy.contains("Searched in artworks for: test")
        cy.contains("Found 11 matches")
        cy.contains("Must include image")
        cy.contains("Tabular")
        cy.contains("List")
        cy.contains("Results per page:")
        cy.get('.no-option').should('have.length',3)
        cy.get('.facet__relation').should('have.length',8)
        cy.get('.artwork-card-big').should('have.length',10)
        cy.get('.pagination li').should('have.length',4)
    })

    it('Contextual Search works', () => {
        cy.contains('Contextual Search').click().url().should('eq', 'http://localhost:10224/resource/?uri=Default%3ASearch') 
        cy.wait(4000)
        cy.contains("What do you want to find?")
        cy.contains("Work")
        cy.contains("Artist")
        cy.contains("Photo")
        cy.contains("Photographer")
        cy.contains("Repository")
        cy.contains("Place")
    })

    it('Artists works', () => {
        cy.contains('Artists').click().url().should('eq', 'http://localhost:10224/resource/?uri=Default%3ADisplayPharosArtists')
        cy.wait(8000)
        cy.get('.personCard').should('have.length',8)
        cy.contains("Default view")
        cy.contains("Birthplace map")
        cy.contains("Deathplace map")
        cy.get('.facet__relation').should('have.length',4)
    })

    it('Photographers works', () => {
        cy.contains('Photographers').click().url().should('eq', 'http://localhost:10224/resource/?uri=Default%3ADisplayPharosPhotographers')
        cy.wait(8000)
        cy.get('.personCard').should('have.length',8)
        cy.contains("Default view")
        cy.contains("Birthplace map")
        cy.contains("Deathplace map")
        cy.get('.facet__relation').should('have.length',4)
    })

    it('Institutions works', () => {
        cy.contains('Repositories').click().url().should('eq', 'http://localhost:10224/resource/?uri=Default%3ADisplayPharosInstitutions')
        cy.wait(8000)
        cy.contains("Default view")
        cy.contains("Map view")
        cy.get('.repositoryCard').should('have.length',9)
        cy.get('.tree-view').should('have.length',28)
    })
     
    it('Partners works', () => {
        cy.contains('Partners').click().url().should('eq', 'http://localhost:10224/resource/?uri=Default%3APartners')
        cy.get('.partner-card').should("have.length",14)
    })
    it('Oil on wood works', () => {
        cy.contains('Oil on wood').click().url().should('eq', 'http://localhost:10224/resource/?uri=Default%3ADisplayCollectionOilOnWood')
        cy.wait(2000)
        cy.contains("Found 128 matches")
        cy.get('.artwork-card-big').should("have.length",10)
        cy.get('.facet__relation').should('have.length',4)
    })
    it('Fratelli Alinari works', () => {
        cy.contains('Fratelli Alinari').click().url().should('eq', 'http://localhost:10224/resource/?uri=Default%3ADisplayCollectionAlinari')
        cy.wait(8000)
        cy.contains("Found 9011 matches")
        cy.get('.artwork-card-big').should("have.length",10)
        cy.get('.facet__relation').should('have.length',3)
    })
    it('Built Works from the Middle East works', () => {
        cy.contains('Built Works').click().url().should('eq', 'http://localhost:10224/resource/?uri=Default%3ADisplayCollectionBuiltworksMiddleEast')
        cy.wait(2000)
        cy.contains("Found 403 matches")
        cy.get('.artwork-card-big').should("have.length",10)
        cy.get('.facet__relation').should('have.length',3)
    })
    it('Italian Renaissance works', () => {
        cy.contains('Italian Renaissance').click();
        cy.wait(8000)
        cy.contains("Found 53055 matches")
        cy.get('.artwork-card-big').should("have.length",10)
        cy.get('.facet__relation').should('have.length',6)
    })
    it('Madonna and Child works', () => {
        cy.contains('Madonna and Child').click().url().should('eq', 'http://localhost:10224/resource/?uri=Default%3ADisplayCollectionMadonnaAndChild')
        cy.wait(8000)
        cy.contains("Found 13068 matches")
        cy.get('.artwork-card-big').should("have.length",10)
        cy.get('.facet__relation').should('have.length',4)
    })
    it('Women Saints works', () => {
        cy.contains('Women Saints').click().url().should('eq', 'http://localhost:10224/resource/?uri=Default%3ADisplayCollectionWomenSaints')
        cy.wait(2000)
        cy.contains("Found 923 matches")
        cy.get('.artwork-card-big').should("have.length",10)
        cy.get('.facet__relation').should('have.length',5)
    })
    it('1800-1900 AD works', () => {
        cy.contains('A century of photographs').click().url().should('eq', 'http://localhost:10224/resource/?uri=Default%3ADisplayCollectionPhotoDatedBetween')
        cy.wait(8000)
        cy.contains("Found 8191 matches")
        cy.get('.artwork-card-big').should("have.length",10)
        cy.get('.facet__relation').should('have.length',3)
    })
    it.only('Women artists works', () => {
        cy.contains('Women Artists').click().url().should('eq', 'http://localhost:10224/resource/start?uri=Default%3ASearch&semanticSearch=N4IgziBcoCYPZRAMwMaQO5wE4GsQBoQUoBtULAUynIENFVIasAXASzGYJEvq0gHVsOAPopKNZhRjCkWOAFthAQRbtOhGKRIgAyhSYoAFgVgJoIVllbUQAFUQBJK1wBqNyVnm2AngAcqkCAAcjTyUkFwMFSEAG40ADYArgEghszMvmCQAPTZvoZMcGAAdEzMlGD6WEbFAHYUzNkVcInVFNmo2WVqIAC%2BvYTxNABGFPGIKmwcXFFgYqy%2BbHC1E6rThMyGifLDtTSs44FdYJXMYNms8jQA5hTnrCjL590cxWAx11zMib7xAaC%2BORIA7-OyOZyENzmDxePwpEJhGARKJcOJJFJpDI5bLoXHFCpVIxgXw0FAUYrYa55IEgrrxcb9QgoCQUa7Ybw2eyBJzWSHuCieHz%2BRAI8KRaIgNHJRCYzLY-KFEplAkGQx1BpNO4tNodFBdNacRkgIajQ6gLkgAAyrA8CVc-MFcMQ1tt41iCWlgUmPQ0EgkTvMFp59uhAthwsCoqR4tRHox6V82Nx6GK6AAzBSsFSAEwABlzAEZsgANACylp0RgoVwAxBwrLVPkaho3EjcUn0BiBNttdvszWDAi6BXa%2BaHHRGrTaR27JXHEMdTvcrrd7o9as8DW8PjM-cwA%2BbwbyQFDQDChfDQmKUe70TKE0m8enMzn80WyxWq7X66xG53BjQrbtog-4gLM8yLKwyycs605YKOJ4OuGKTDvBs5Sik3rrGBe4HoOIDBmOZ5hheIpXtGN5znegSyo%2BKbPpS2R5oWJblpWhjVjQdblL%2BTZdi21xtrcIH9EaxCQGQICJLUrAAI7JA4miQAWhA4L%2BSkgAASmMEhQSshDwTYljWIGR4hsRE6XoiyIShh94ZFkuQKnISosCq1RqvUjTNK0ZK6tkty1FEWCgSaYyIAA4hQQUCjMdwQUsKyBFFMUhRsWw7HsBwLjQJwNMu7Zrk8AXRcF26fBsPx-DYgJwMC1WmdyEKIeOyFkdZMa3p6qQPrkyb4nchKGMSpLkoxtX1e0CQMl2zKSGyWAco1BHNae3YkQGwTkTZsbUT1DnygULmlG5g2quq3lar57SdIFwWhSM4XLahCFreem0veh87JaVsW%2Bsw-oRoeTXHm9G2TlGO1dfGWJ9U%2BGaMcx75sV%2BXE-n%2BzaAYJwGBKBPaZf2MFDnBr1IaRxOurt3WLvlFwrncFzrucd0CuVu4A-uQP4YRLUWW1kbbZ1VHdbRcP0QjWZMW%2BrGfhx348Rj-FY0JHZGuBViQdBz0k7OYOWbBlPQ5Fv1pThHN4UGq1k5tkNC3ZNG9Ti8MvlLLEfuxnHcQ2fEAUBwm46JXY8OYxlEytoPWxDguUfb%2B1yk5R1FCd5RnR5F2amA2p%2BbI2QAAoCpntTCAUYDCCl92Y6aMq5QABCzpvqwsiXV2Adcm1wJeaVjoKh8tPN6-zW0dTH31x45eSJ65KeVOdXkZ1nN16vXD1Vz9qVxXMGvN2v93pb2WWHCANNnHThWM8V9ds5VvyghNIJh-3kdWdetmj6LTspu5RIkmSLt338dIZpMhZAtJawNw7mXWvrAWw9X57VlOPZySdlSpxqHPHyOpbrt0rk9cBn1IHvUnPgo2O8-pm0BqCS2EdWrkyHi-KmMNExi1TBLV8bsUZyzRgrH2xplY4xAHjDKfZsra0NrzKBg9iHCxSMfAqq5z4bhKqlK%2B5DOaULMkRCRtDbYj3gY7fqDFJZIxlh7eW3sHp%2B1Vl2Rumskp4J1gQ8GKEHEkJAOXMhMBcJcyoY46BdCKJwJFvo52iNpbu1Rl7XiFjsb%2BwEYHQgJcAAiCh9h2IsM4PuVsaE22joExhiDJ7Jy-p5DUGDs56heIaJWq8QBYXUGBeKW89KrCmPU-GwjD6yNPvIh4xVKkqO%2BDfGqNIGrgMftkqOsCGH2SYR-AaM8PIjV-uNEZU16SgTmqydkD8sl820bk6ZDsDoJ0VEU1BJTLqZ2uv5SpK9cH4SkQPWhUjY51PZhQnZ1C9k5Kma49%2BBjWGu2RrLT26MeECRViJLs7SD5h0eU-A2M5DlH1ykubpDNemKP6e8CqqiLYaPEYQ5%2BATkX-JCUYsJHDQXcOiZCgO1jGlN2aaIpFmiiWIrQsit5-0PmZK%2BVon59C-nBPFi7Yx4TOGRMVr7GJVijSDNGSAf%2B6iQa%2BMHjovJMy6LzKGkssaktlWANAsHMZuyBWTKFdImZBTTkoIWWg0pV1MFYDzgXZYxdcpl2wdU%2B5Fp4UTOcWI2OJc27rx5Woz5ar9m-KtUc2ZAKxWUpBWYqJmNLFQo0Iy2xcKXGEqcRyhCwba7L3Dfi1VbL80wMtcGkVLDE3sOTVw8xabZUZtSLlZJVxfyRorX4jVpKEw2uOnaoa6cymL31K00Cndu49rzX2g5wrjkT1tade1Fz57XKwevI02B7oss5b2yRubY65neRGvlUbBUkqXfG8lbDgWmK4r%2BeasUW10riaJJkywABW0kUDMAcDFAAHqQXM%2BBwO5gALoaFIKANSQVEDaSuW0Q5oBe6mv5eyqtN7Y1x2xDEOAzJhjFFuOkbwxQpCJC6BIbIaY3wAA4ACcABWFjAB2O5h8kCcWqpmzeTKtbIF4xKBVoIwCJGuKubemGr0WtwzW2G2RCPEdIw0fclGYDUZoLR%2BjhZmNsc4zggcfrc1PI%2Bie0ePGrh8bxd4gl5n5NQzw2S0VjECxMc89kXM2YmLZgALRYBgEgfzYBvC1ABsB-zG4awCR0DS99-DoqdjVuwP9tQANAaiKBiSkGIMQag70QrxXCuEGknJBSSlcxFa7EgUgMHuB3ESPETg0BrF%2BiXPVwgCRWDXFqGECLYdEl%2BmKKWGg3hRjmSNNceC%2BRKxwH8HoVUQ2RtjYmxKU8okgA')
        cy.wait(12000)
        cy.contains("Found 1354 matches")
        cy.get('.artwork-card-big').should("have.length",10)
        cy.get('.facet__relation').should('have.length',9)
    })

})