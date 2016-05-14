angular
	.module('science')
    .factory('People', function(){
        var people = [
            {
                name: "Thales",
                location: "Miletus",
                professions: ["astronomy", "mathematics", "philosophy"],
                birthDate: "-000624-01-01",
                deathDate: "-000546-01-01"
            },
            {
                name: "Anaximander",
                location: "Miletus",
                professions: ["astronomy", "geometry", "geography", "metaphysics"],
                birthDate: "-000610-01-01",
                deathDate: "-000546-01-01"
            },
            {
                name: "Pythagoras",
                isHero: true,
                location: "Samos",
                professions: ["mathematics", "music", "metaphysics"],
                birthDate: "-000570-01-01",
                deathDate: "-000495-01-01",
                intro: "Pythagoras made influential contributions to philosophy and religion in the late 6th century BC. He is often revered as a great mathematician and scientist and is best known for the Pythagorean theorem which bears his name."
            },
            {
                name: "Anaxagoras",
                location: "Klazomenai",
                professions: ["philosophy"],
                birthDate: "-000510-01-01",
                deathDate: "-000428-01-01"
            },
            {
                name: "Socrates",
                location: "Athens",
                professions: ["philosophy", "epistemology"],
                birthDate: "-000470-01-01",
                deathDate: "-000399-01-01",
                left: 70
            },
            {
                name: "Hippocrates",
                location: "Island of Cos, Greece",
                professions: ["medicine"],
                birthDate: "-000460-01-01",
                deathDate: "-000375-01-01",
                left: 35
            },
            {
                name: "Democritus",
                location: "Abdera, Thrace",
                professions: ["metaphysics", "astronomy", "mathematics"],
                birthDate: "-000460-01-01",
                deathDate: "-000370-01-01"
            },
            {
                name: "Plato",
                location: "Athens, Greece",
                professions: ["philosophy", "epistemology"],
                birthDate: "-000428-01-01",
                deathDate: "-000348-01-01"
            },
            {
                name: "Aristotle",
                isHero: true,
                location: "Stagira, Chalcidice, Greece",
                professions: ["physics", "philosophy", "metaphysics"],
                birthDate: "-000384-01-01",
                deathDate: "-000322-01-01"
            },
            {
                name: "Euclid",
                location: "Syracuse, Sicily",
                professions: ["mathematics"],
                birthDate: "-000323-01-01",
                deathDate: "-000283-01-01",
                left: 60
            },
            {
                name: "Aristarchus",
                location: "Samos",
                professions: ["astronomy", "mathematics"],
                birthDate: "-000310-01-01",
                deathDate: "-000230-01-01",
                left: 30
            },
            {
                name: "Archimedes",
                location: "Syracuse, Sicily",
                professions: ["engineering", "mathematics", "physics", "astronomy"],
                birthDate: "-000287-01-01",
                deathDate: "-000212-01-01",
                left: 40
            },
            {
                name: "Eratosthenes",
                location: "Cyrene, Libya",
                professions: ["geography", "mathematics", "music"],
                birthDate: "-000276-01-01",
                deathDate: "-000194-01-01",
                left: 60
            },
            {
                name: "Seleucus",
                professions: ["astronomy", "philosophy"],
                location: "Seleucia",
                birthDate: "-000190-01-01",
                deathDate: "-000150-01-01"
            },
            {
                name: "Hipparchus",
                professions: ["astronomy", "trigonometry"],
                location: "Nicaea",
                birthDate: "-000190-01-01",
                deathDate: "-100020-01-01",
                left: 10
            },
            {
                name: "Pliny the Elder",
                location: "Comum, Italy",
                professions: ["author", "naturalism", "natural philosophy"],
                birthDate: "0023-01-01",
                deathDate: "0079-01-01"
            },
            {
                name: "Ptolemy",
                professions: ["astronomy", "mathematics", "geography"],
                location: "Alexandria Egypt",
                birthDate: "000100-01-01",
                deathDate: "000170-01-01"
            },
            {
                name: "Galen",
                professions: ["physiology",  "pathology", "pharmacology", "neurology", "anatomy"],
                location: "Greek",
                birthDate: "000129-01-01",
                deathDate: "000216-01-01"
            },
            {
                name: "Avicenna",
                professions: ["medicine", "philosophy"],
                location: "Iran",
                birthDate: "000980-01-01",
                deathDate: "1037-01-01"
            },
            {
                name: "Roger Bacon",
                displayName: "Bacon",
                professions: ["alchemy", "optics", "linguistics"],
                location: "England",
                birthDate: "1220-01-01",
                deathDate: "1292-01-01"
            },
            {
                name: "Johannes Gensfleisch zur Laden zum Gutenberg",
                displayName: "Gutenberg",
                professions: ["printing", "invention"],
                location: "Mainz, Electorate of Mainz",
                birthDate: "1398-01-01",
                deathDate: "1468-02-03"
            },
            {
                name: "Leonardo da Vinci",
                displayName: "da Vinci",
                professions: ["invention", "art", "engineering", "mathematics", "botany"],
                location: "Republic of Florence",
                birthDate: "1452-04-15",
                deathDate: "1519-05-02"
            },
            {
                name: "Nicolaus Copernicus",
                displayName: "Copernicus",
                professions: ["astronomy", "mathematics"],
                location: "Toruń, Poland",
                birthDate: "1473-02-19",
                deathDate: "1543-05-24"
            },
            {
                name: "Paracelsus",
                professions: ["toxicology", "medicine", "botany"],
                location: "Switzerland",
                birthDate: "1493-11-11",
                deathDate: "1541-09-24"
            },
            {
                name: "Andreas Vesalius",
                displayName: "Vesalius",
                professions: ["anatomy", "medicine"],
                location: "Brussels, Belgium",
                birthDate: "1514-12-31",
                deathDate: "1564-10-15"
            },
            {
                name: "Tycho Brahe",
                displayName: "Tycho",
                professions: ["astronomy", "alchemy"],
                location: "Denmark",
                birthDate: "1546-12-14",
                deathDate: "1601-10-24"
            },
            {
                name: "Giordano Bruno",
                displayName: "Bruno",
                professions: ["cosmology", "philosophy"],
                location: "Nola, Naples",
                birthDate: "1548-01-01",
                deathDate: "1600-02-17"
            },
            {
                name: "Galileo Galilei",
                displayName: "Galileo",
                isHero: true,
                professions: ["physics", "astronomy", "engineering", "mathematics", "philosophy"],
                location: "Pisa",
                birthDate: "1564-02-15",
                deathDate: "1642-01-08"
            },
            {
                name: "Johannes Kepler",
                displayName: "Kepler",
                professions: ["astronomy", "mathematics", "astrology"],
                location: "Württemberg, Germany",
                birthDate: "1571-12-27",
                deathDate: "1630-11-15"
            },
            {
                name: "William Harvey",
                displayName: "Harvey",
                professions: ["anatomy", "medicine"],
                location: "Kent, England",
                birthDate: "1578-04-01",
                deathDate: "1657-06-03"
            },
            {
                name: "René Descartes",
                displayName: "Descartes",
                professions: ["epistemology", "mathematics", "physics"],
                location: "Kent, England",
                birthDate: "1578-04-01",
                deathDate: "1657-06-03"
            },
            {
                name: "Blaise Pascal",
                displayName: "Pascal",
                professions: ["mathematics", "physics"],
                location: "Auvergne, France",
                birthDate: "1623-06-19",
                deathDate: "1662-09-19"
            },
            {
                name: "Robert Boyle",
                displayName: "Boyle",
                professions: ["chemistry", "physics"],
                location: "Country Waterford, Ireland",
                birthDate: "1627-01-25",
                deathDate: "1691-12-31"
            },
            {
                name: "Antonie van Leeuwenhoek",
                displayName: "Leeuwenhoek",
                professions: ["microbiology"],
                location: "Delft, Dutch Republic",
                birthDate: "1632-10-24",
                deathDate: "1723-08-26"
            },
            {
                name: "Robert Hooke",
                displayName: "Hooke",
                professions: ["microscopy", "architecture"],
                location: "Isle of Wight, England",
                birthDate: "1635-07-28",
                deathDate: "1703-03-03"
            },
            {
                name: "Sir Isaac Newton",
                displayName: "Newton",
                isHero: true,
                professions: ["physics", "natural philosophy", "mathematics", "astronomy", "alchemy"],
                location: "Lincolnshire, England",
                birthDate: "1642-12-25",
                deathDate: "1727-03-31"
            },
            {
                name: "Giovanni Domenico Cassini",
                displayName: "Cassini",
                professions: ["astronomy", "mathematics", "astrology", "engineering"],
                location: "Perinaldo, Republic of Genova",
                birthDate: "1625-06-08",
                deathDate: "1712-09-14"
            },
            {
                name: "Christiaan Huygens",
                displayName: "Huygens",
                professions: ["astronomy", "mathematics", "optics", "physics"],
                location: "The Hague, Dutch Republic",
                birthDate: "1629-04-14",
                deathDate: "1695-07-08"
            },
            {
                name: "Edmond Halley",
                displayName: "Halley",
                professions: ["astronomy", "geophysics", "mathematics", "physics"],
                location: "Haggerston, Middlesex, England",
                birthDate: "1656-11-08",
                deathDate: "1742-01-14"
            },
            {
                name: "Thomas Newcomen",
                displayName: "Newcomen",
                professions: ["engineering"],
                location: "Dartmouth, Devon, England",
                birthDate: "1664-02-28",
                deathDate: "1729-08-05"
            },
            {
                name: "Benjamin Franklin",
                displayName: "Franklin",
                professions: ["physics"],
                location: "Boston, Massachusetts Bay, British America",
                birthDate: "1706-01-17",
                deathDate: "1790-04-14"
            },
            {
                name: "Carolus Linnaeus",
                displayName: "Linnaeus",
                professions: ["botany", "zoology", "taxonomy"],
                location: "Sweden",
                birthDate: "1707-05-23",
                deathDate: "1778-01-10"
            },
            {
                name: "Henry Cavendish",
                displayName: "Cavendish",
                professions: ["chemistry", "physics"],
                location: "Nice, France",
                birthDate: "1731-10-10",
                deathDate: "1810-02-24"
            },
            {
                name: "Joseph Priestley",
                displayName: "Priestley",
                professions: ["chemistry",],
                location: "Yorkshire, England",
                birthDate: "1733-03-13",
                deathDate: "1804-02-06"
            },
            {
                name: "James Watt",
                displayName: "Watt",
                professions: ["mechanical engineering", "chemistry"],
                location: "Greenock, Renfrewshire, Scotland",
                birthDate: "1736-01-19",
                deathDate: "1819-08-25"
            },
            {
                name: "Charles-Augustin de Coulomb",
                displayName: "Coulomb",
                professions: ["physics"],
                location: "Angoulême, Angoumois, France",
                birthDate: "1736-06-14",
                deathDate: "1806-08-23"
            },
            {
                name: "Luigi Galvani",
                displayName: "Galvani",
                professions: ["bioelectricity", "biology"],
                location: "Bologna, Italy",
                birthDate: "1737-09-09",
                deathDate: "1798-12-04"
            },
            {
                name: "William Herschel",
                displayName: "Herschel",
                professions: ["astronomy", "music"],
                location: "Hanover, Germany",
                birthDate: "1738-11-15",
                deathDate: "1822-09-25"
            },
            {
                name: "Antoine-Laurent de Lavoisier",
                displayName: "Lavoisier",
                professions: ["chemistry", "biology"],
                location: "Paris, France",
                birthDate: "1743-09-26",
                deathDate: "1794-05-08"
            },
            {
                name: "Alessandro Giuseppe Antonio Anastasio Volta",
                displayName: "Volta",
                professions: ["physics", "chemistry"],
                location: "Como, Duchy of Milan",
                birthDate: "1745-02-18",
                deathDate: "1827-03-05"
            },
            {
                name: "Pierre-Simon Laplace",
                displayName: "Laplace",
                professions: ["mathematics", "statistics", "physics"],
                location: "Normandy, France",
                birthDate: "1749-03-23",
                deathDate: "1827-03-05"
            },
            {
                name: "Edward Jenner",
                isHero: true,
                displayName: "Jenner",
                professions: ["immunology", "zoology", "medicine"],
                location: "Berkeley, Gloucestershire, England",
                birthDate: "1749-05-17",
                deathDate: "1823-01-26"
            },
            {
                name: "John Dalton",
                displayName: "Dalton",
                professions: ["chemistry", "physics", "meteorology"],
                location: "Eaglesfield, Cumberland, England",
                birthDate: "1766-09-06",
                deathDate: "1844-07-27"
            },
            {
                name: "Georges Cuvier",
                displayName: "Cuvier",
                professions: ["paleontology", "anatomy", "zoology"],
                location: "Montbéliard, France",
                birthDate: "1769-08-23",
                deathDate: "1832-05-13"
            },
            {
                name: "Alexander von Humboldt",
                displayName: "Humboldt",
                professions: ["biogeography", "geography"],
                location: "Berlin, Kingdom of Prussia",
                birthDate: "1769-09-14",
                deathDate: "1859-05-06"
            },
            {
                name: "Thomas Young",
                displayName: "Young",
                professions: ["optics", "physics", "physiology", "egyptology"],
                location: "Milverton, Somerset, England",
                birthDate: "1773-06-13",
                deathDate: "1829-05-10"
            },
            {
                name: "André-Marie Ampère",
                displayName: "Ampère",
                professions: ["physics", "mathematics"],
                location: "Lyon, France",
                birthDate: "1775-01-22",
                deathDate: "1836-06-10"
            },
            {
                name: "Amedeo Avogadro",
                displayName: "Avogadro",
                professions: ["physics"],
                location: "Turin, Piedmont-Sardinia",
                birthDate: "1776-08-09",
                deathDate: "1856-07-09"
            },
            {
                name: "Johann Carl Friedrich Gauss",
                displayName: "Gauss",
                professions: ["mathematics", "physics", "astronomy", "optics", "geophysics"],
                location: "Brunswick, Duchy of Brunswick-Wolfenbüttel, Holy Roman Empire",
                birthDate: "1777-04-30",
                deathDate: "1855-02-23"
            },
            {
                name: "Joseph-Louis Gay-Lussac",
                displayName: "Gay-Lussac",
                professions: ["chemistry", "physics"],
                location: "Saint-Léonard-de-Noblat, France",
                birthDate: "1778-12-06",
                deathDate: "1850-05-09"
            },
            {
                name: "Sir Humphry Davy",
                displayName: "Davy",
                professions: ["chemistry"],
                location: "Penzance, Cornwall, England",
                birthDate: "1778-12-17",
                deathDate: "1829-05-29"
            },
            {
                name: "Jöns Jacob Berzelius",
                displayName: "Berzelius",
                professions: ["chemistry"],
                location: "Väversunda, Östergötland, Sweden",
                birthDate: "1779-08-20",
                deathDate: "1848-08-07"
            },
            {
                name: "John James Audubon",
                displayName: "Audubon",
                professions: ["ornithology", "zoology"],
                location: "Les Cayes, Saint-Domingue",
                birthDate: "1785-04-26",
                deathDate: "1851-01-27"
            },
            {
                name: "Georg Simon Ohm",
                displayName: "Ohm",
                professions: ["physics", "mathematics"],
                location: "Erlangen, Brandenburg-Bayreuth",
                birthDate: "1789-03-16",
                deathDate: "1854-07-06"
            },
            {
                name: "Michael Faraday",
                displayName: "Faraday",
                professions: ["physics", "chemistry"],
                location: "Newington Butts, England",
                birthDate: "1791-09-22",
                deathDate: "1867-08-25"
            },
            {
                name: "Sir Charles Lyell",
                displayName: "Lyell",
                professions: ["geology"],
                location: "Kinnordy, Angus, Scotland",
                birthDate: "1797-11-14",
                deathDate: "1875-02-22"
            },
            {
                name: "Charles Darwin",
                isHero: true,
                displayName: "Darwin",
                professions: ["evolution", "natural history", "geology"],
                location: "Shrewsbury, Shropshire, England",
                birthDate: "1809-02-12",
                deathDate: "1882-04-19"
            },
            {
                name: "Sir Francis Galton",
                displayName: "Galton",
                professions: ["anthropology", "sociology", "eugenics", "genetics", "statistics"],
                location: "Birmingham, Warwickshire, England",
                birthDate: "1822-02-16",
                deathDate: "1911-01-17"
            },
            {
                name: "Gregor Mendel",
                displayName: "Mendel",
                professions: ["genetics"],
                location: "Silesia, Austrian Empire",
                birthDate: "1822-07-20",
                deathDate: "1884-01-06"
            },
            {
                name: "Louis Pasteur",
                displayName: "Pasteur",
                professions: ["microbiology", "chemistry"],
                location: "Dole, France",
                birthDate: "1822-12-27",
                deathDate: "1895-09-28"
            },
            {
                name: "Alfred Russel Wallace",
                displayName: "Wallace",
                professions: ["evolution", "biology", "zoology"],
                location: "Llanbadoc, Monmouthshire, Wales",
                birthDate: "1823-01-08",
                deathDate: "1913-11-07"
            },
            {
                name: "Sir William Thomson, 1st Baron Kelvin (Lord Kelvin)",
                displayName: "Lord Kelvin",
                professions: ["thermodynamics", "physics", "mathematics"],
                location: "Belfast, Ireland, United Kingdom",
                birthDate: "1824-06-26",
                deathDate: "1907-12-17"
            },
            {
                name: "Sir Joseph Lister",
                displayName: "Lister",
                professions: ["surgery", "medicine"],
                location: "West Ham, England",
                birthDate: "1827-04-05",
                deathDate: "1912-02-10"
            },
            {
                name: "James Clerk Maxwell",
                isHero: true,
                displayName: "Maxwell",
                professions: ["physics", "mathematics"],
                location: "Edinburgh, Scotland",
                birthDate: "1831-06-13",
                deathDate: "1879-11-05"
            },
            {
                name: "Dmitry Ivanovich Mendeleyev",
                displayName: "Mendeleyev",
                professions: ["chemistry", "physics"],
                location: "Verkhnie Aremzyani, Tobolsk Governorate, Russian Empire",
                birthDate: "1834-02-08",
                deathDate: "1907-02-02"
            },
            {
                name: "Edward Williams Morley",
                displayName: "Morley",
                professions: ["physics", "optics"],
                location: "Newark, New Jersey",
                birthDate: "1838-01-29",
                deathDate: "1923-02-24"
            },
            {
                name: "Ivan Petrovich Pavlov",
                displayName: "Pavlov",
                professions: ["physiology"],
                location: "Ryazan, Russian Empire",
                birthDate: "1849-09-29",
                deathDate: "1936-02-27"
            },
            {
                name: "Albert Abraham Michelson",
                displayName: "Michelson",
                professions: ["physics"],
                location: "Strzelno, Kingdom of Prussia",
                birthDate: "1852-12-19",
                deathDate: "1931-05-09"
            },
            {
                name: "Robert Heinrich Herman Koch",
                displayName: "Koch",
                professions: ["microbiology"],
                location: "Clausthal, Kingdom of Hanover",
                birthDate: "1843-12-11",
                deathDate: "1910-05-27"
            },
            {
                name: "Heinrich Rudolf Hertz",
                displayName: "Hertz",
                professions: ["electrical engineering", "physics"],
                location: "Hamburg, Germany",
                birthDate: "1857-02-22",
                deathDate: "1894-01-01"
            },
            {
                name: "Max Karl Ernst Ludwig Planck",
                displayName: "Planck",
                professions: ["quantum theory", "physics"],
                location: "Kiel, Duchy of Holstein",
                birthDate: "1858-04-23",
                deathDate: "1947-10-04"
            },
            {
                name: "Nettie Maria Stevens",
                displayName: "Stevens",
                professions: ["genetics"],
                location: "Cavendish, Vermont",
                birthDate: "1861-07-07",
                deathDate: "1912-05-04"
            },
            {
                name: "William Bateson",
                displayName: "Bateson",
                professions: ["genetics"],
                location: "Whitby, Yorkshire",
                birthDate: "1861-08-08",
                deathDate: "1926-02-08"
            },
            {
                name: "Antoine Henri Becquerel",
                displayName: "Becquerel",
                professions: ["radioactivity", "physics", "chemistry"],
                location: " Paris, France",
                birthDate: "1852-12-15",
                deathDate: "1908-08-25"
            },
            {
                name: "Nikola Tesla",
                displayName: "Tesla",
                professions: ["electrical engineering", "physics"],
                location: "Smiljan, Austrian Empire",
                birthDate: "1856-07-10",
                deathDate: "1943-01-07"
            },
            {
                name: "Pierre Curie",
                displayName: "P. Curie",
                professions: ["crystallography", "radioactivity", "physics", "chemistry"],
                location: " Paris, France",
                birthDate: "1859-05-15",
                deathDate: "1906-04-19"
            },
            {
                name: "Marie Skłodowska Curie",
                displayName: "M. Curie",
                professions: ["radioactivity", "physics", "chemistry"],
                location: "Warsaw, Poland",
                birthDate: "1867-11-07",
                deathDate: "1934-07-04"
            },
            {
                name: "Henrietta Swan Leavitt",
                displayName: "Leavitt",
                professions: ["astronomy"],
                location: "Lancaster, Massachusetts, USA",
                birthDate: "1868-07-04",
                deathDate: "1921-12-12"
            },
            {
                name: "Ernest Rutherford",
                displayName: "Rutherford",
                professions: ["nuclear physics", "chemistry", "physics"],
                location: "Brightwater, Tasman District, New Zealand",
                birthDate: "1871-08-30",
                deathDate: "1937-10-19"
            },
            {
                name: "Albert Einstein",
                isHero: true,
                displayName: "Einstein",
                professions: ["physics"],
                location: "Ulm, Württemberg, Germany",
                birthDate: "1879-03-14",
                deathDate: "1955-04-18"
            },
            {
                name: "Alfred Lothar Wegener",
                displayName: "Wegener",
                professions: ["geology", "meteorology", "astronomy"],
                location: "Berlin, Germany",
                birthDate: "1880-11-01",
                deathDate: "1930-01-01"
            },
            {
                name: "Sir Alexander Fleming",
                displayName: "Fleming",
                professions: ["bacteriology", "immunology"],
                location: "Lochfield, East Ayrshire, Scotland",
                birthDate: "1881-08-06",
                deathDate: "1955-03-11"
            },
            {
                name: "Max Born",
                displayName: "Born",
                professions: ["quantum theory", "mathematics", "physics"],
                location: "Breslau, German",
                birthDate: "1882-12-11",
                deathDate: "1970-01-05"
            },
            {
                name: "Niels Bohr",
                displayName: "Bohr",
                professions: ["quantum theory", "physics"],
                location: "Copenhagen, Denmark",
                birthDate: "1885-10-07",
                deathDate: "1962-11-18"
            },
            {
                name: "Erwin Schrödinger",
                displayName: "Schrödinger",
                professions: ["quantum theory", "physics", "thermodynamics"],
                location: "Vienna, Austria-Hungary",
                birthDate: "1887-08-12",
                deathDate: "1961-01-04"
            },
            {
                name: "Selman Abraham Waksman",
                displayName: "Waksman",
                professions: ["biochemistry", "microbiology"],
                location: "Nova Pryluka, Kiev Governorate, Russian Empire",
                birthDate: "1888-07-22",
                deathDate: "1973-08-16"
            },
            {
                name: "Edwin Powell Hubble",
                displayName: "Hubble",
                professions: ["astronomy"],
                location: "Marshfield, Missouri, USA",
                birthDate: "1889-11-30",
                deathDate: "1953-09-28"
            },
            {
                name: "Georges Henri Joseph Édouard Lemaître",
                displayName: "Lemaître",
                professions: ["cosmology", "astrophysics"],
                location: "Charleroi, Belgium",
                birthDate: "1894-07-17",
                deathDate: "1966-06-20"
            },
            {
                name: "Linus Pauling",
                displayName: "Pauling",
                professions: ["quantum chemistry", "biochemistry"],
                location: "Portland, Oregon, USA",
                birthDate: "1901-02-28",
                deathDate: "1994-08-19"
            },
            {
                name: "Enrico Fermi",
                displayName: "Fermi",
                professions: ["nuclear physics", "quantum theory"],
                location: "Rome, Italy",
                birthDate: "1901-09-29",
                deathDate: "1954-22-28"
            },
            {
                name: "Margaret Mead",
                displayName: "Mead",
                professions: ["anthropology"],
                location: "Philadelphia, Pennsylvania, USA",
                birthDate: "1901-12-16",
                deathDate: "1978-11-15"
            },
            {
                name: "Barbara McClintock",
                displayName: "McClintock",
                professions: ["Cytogenetics", "physiology"],
                location: "Hartford, Connecticut, USA",
                birthDate: "1902-06-16",
                deathDate: "1992-09-02"
            },
            {
                name: "Louis Seymour Bazett Leakey",
                displayName: "L. Leakey",
                professions: ["paleoanthropology", "archaeology"],
                location: "Kabete, British East Africa",
                birthDate: "1903-08-07",
                deathDate: "1972-10-01"
            },
            {
                name: "Georgiy Antonovich Gamov",
                displayName: "Gamow",
                professions: ["cosmology", "physics"],
                location: "Odessa, Russia",
                birthDate: "1904-03-04",
                deathDate: "1968-08-19"
            },
            {
                name: "Julius Robert Oppenheimer",
                displayName: "Oppenheimer",
                professions: ["physics"],
                location: "New York City, New York",
                birthDate: "1904-04-22",
                deathDate: "1967-02-18"
            },
            {
                name: "John Bardeen",
                displayName: "Bardeen",
                professions: ["electrical engineering", "physics"],
                location: "Madison, Wisconsin, USA.",
                birthDate: "1908-05-23",
                deathDate: "1991-01-30"
            },
            {
                name: "Mary Leakey",
                displayName: "M. Leakey",
                professions: ["paleoanthropology"],
                location: "London, England, UK",
                birthDate: "1913-02-06",
                deathDate: "1996-12-09"
            },
            {
                name: "nnn",
                displayName: "ddd",
                professions: ["ppp"],
                location: "lll",
                birthDate: "0000-01-01",
                deathDate: "0000-01-01"
            }
        ];

        var getURL = function(_elem){
            return _elem.name.toLowerCase().replace(/\s/g, "-");
        };

        var getLeft = function(_index){
            if((_index + 3) % 3 == 0) {
                return 0
            } else if((_index + 3) % 3 == 1) {
                return 55
            }  else if((_index + 3) % 3 == 2) {
                return 25
            }
        }

        var bootstrapArray = function(_array){
            var array = _array;

            for(var i = 0; i < array.length; i++){
                array[i].url = getURL(array[i]);
                
                if(array[i].left == null){
                    array[i].left = getLeft(i);
                }
            }

            return array
        }

        return {
            getPeople: function(){
                console.log("people: " + people.length);
                return bootstrapArray(people)
            },
            getPerson: function(url){
                var index = people.map(
                    function(people){ return people.url; }
                ).indexOf(url);

                return people[index];
            }
        }
    });