/*
 * these are counts for the word 'the' as an imperfect measure
 * of the total number of books in HathiTrust by year. This was
 * obtained using the following Solr query:
 *
 * http://chinkapin.pti.indiana.edu:9994/solr/select/?qt=sharding&facet=true&facet.field=publishDate&wt=json&facet.sort=index&facet.limit=2000&q=ocr:the
 *
 * ideally a query of ocr:* would be used, but this never returns :-)
 */

allCounts = {
  "1948": 4339, 
  "1949": 14298, 
  "1942": 3322, 
  "1943": 2682, 
  "1940": 4513, 
  "1941": 3615, 
  "1946": 4311, 
  "1947": 4613, 
  "1944": 2442, 
  "1945": 2763, 
  "1991": 5024, 
  "1799": 1934, 
  "1798": 2112, 
  "1990": 6526, 
  "1793": 1893, 
  "1792": 1795, 
  "1791": 1770, 
  "1790": 2401, 
  "1797": 1504, 
  "1796": 2176, 
  "1795": 1730, 
  "1794": 1612, 
  "1992": 5367, 
  "1995": 3560, 
  "1994": 3988, 
  "1700": 1929, 
  "1701": 1125, 
  "1702": 260, 
  "1703": 245, 
  "1704": 263, 
  "1705": 206, 
  "1706": 162, 
  "1707": 218, 
  "1708": 214, 
  "1709": 224, 
  "1996": 3459, 
  "1669": 169, 
  "1668": 151, 
  "1667": 133, 
  "1666": 298, 
  "1665": 856, 
  "1664": 127, 
  "1663": 116, 
  "1662": 129, 
  "1661": 133, 
  "1660": 171, 
  "1849": 7148, 
  "1848": 8161, 
  "1843": 8769, 
  "1842": 7713, 
  "1841": 10025, 
  "1840": 9238, 
  "1847": 7775, 
  "1846": 8275, 
  "1845": 8367, 
  "1844": 11207, 
  "1908": 27377, 
  "1909": 26511, 
  "1906": 26563, 
  "1907": 27256, 
  "1904": 25794, 
  "1905": 25504, 
  "1902": 26081, 
  "1903": 24827, 
  "1900": 55236, 
  "1901": 24621, 
  "1960": 4995, 
  "1623": 133, 
  "1622": 308, 
  "1621": 170, 
  "1620": 183, 
  "1627": 94, 
  "1626": 93, 
  "1625": 157, 
  "1624": 106, 
  "1999": 3117, 
  "1961": 5914, 
  "1629": 191, 
  "1628": 131, 
  "1696": 178, 
  "1697": 290, 
  "1694": 182, 
  "1695": 153, 
  "1692": 201, 
  "1693": 196, 
  "1759": 538, 
  "1758": 1183, 
  "1757": 753, 
  "1756": 2102, 
  "1755": 780, 
  "1754": 2039, 
  "1753": 807, 
  "1752": 999, 
  "1751": 843, 
  "1750": 666, 
  "1889": 18935, 
  "1888": 19466, 
  "1887": 18179, 
  "1886": 16336, 
  "1885": 14642, 
  "1884": 14862, 
  "1883": 17478, 
  "1882": 15319, 
  "1881": 14500, 
  "1880": 17369, 
  "1832": 6323, 
  "1833": 6854, 
  "1830": 7877, 
  "1831": 7277, 
  "1836": 8335, 
  "1837": 7549, 
  "1834": 9005, 
  "1835": 8038, 
  "1838": 7810, 
  "1839": 6998, 
  "2011": 2, 
  "2010": 110, 
  "1690": 239, 
  "1691": 138, 
  "1955": 3472, 
  "1954": 3431, 
  "1957": 4052, 
  "1956": 3700, 
  "1951": 3035, 
  "1950": 5030, 
  "1953": 3715, 
  "1952": 3315, 
  "1959": 5998, 
  "1958": 3746, 
  "1698": 214, 
  "1699": 165, 
  "1993": 4253, 
  "1713": 221, 
  "1712": 231, 
  "1711": 246, 
  "1710": 342, 
  "1717": 587, 
  "1716": 611, 
  "1715": 287, 
  "1714": 399, 
  "1719": 354, 
  "1718": 319, 
  "1658": 142, 
  "1659": 174, 
  "1652": 137, 
  "1653": 105, 
  "1650": 152, 
  "1651": 159, 
  "1656": 100, 
  "1657": 106, 
  "1654": 110, 
  "1655": 124, 
  "1630": 122, 
  "1631": 82, 
  "1984": 6164, 
  "1985": 5116, 
  "1982": 4604, 
  "1983": 5173, 
  "1980": 8664, 
  "1981": 6891, 
  "1638": 90, 
  "1639": 99, 
  "1997": 3354, 
  "1876": 14829, 
  "1877": 13493, 
  "1874": 12438, 
  "1875": 11290, 
  "1872": 12163, 
  "1873": 11217, 
  "1870": 11531, 
  "1871": 10046, 
  "1989": 5221, 
  "1878": 12921, 
  "1879": 13389, 
  "1919": 23642, 
  "1918": 22704, 
  "1911": 27627, 
  "1910": 30166, 
  "1913": 28696, 
  "1912": 28757, 
  "1915": 24329, 
  "1914": 27355, 
  "1917": 23684, 
  "1916": 23107, 
  "1977": 8672, 
  "1976": 8011, 
  "1975": 8735, 
  "1974": 4693, 
  "1973": 4090, 
  "1972": 3638, 
  "1971": 3363, 
  "1970": 3560, 
  "1968": 2602, 
  "1969": 2396, 
  "1618": 174, 
  "1619": 155, 
  "1616": 142, 
  "1617": 153, 
  "1614": 172, 
  "1615": 140, 
  "1612": 181, 
  "1613": 170, 
  "1610": 176, 
  "1611": 150, 
  "1681": 154, 
  "1680": 173, 
  "1768": 904, 
  "1769": 914, 
  "1685": 148, 
  "1684": 210, 
  "1687": 181, 
  "1686": 170, 
  "1762": 744, 
  "1763": 708, 
  "1760": 757, 
  "1761": 1040, 
  "1766": 924, 
  "1767": 1202, 
  "1764": 778, 
  "1765": 1095, 
  "1829": 8127, 
  "1828": 6117, 
  "1825": 5889, 
  "1824": 6643, 
  "1827": 5697, 
  "1826": 6216, 
  "1821": 5114, 
  "1820": 5871, 
  "1823": 5882, 
  "1822": 6051, 
  "1920": 26353, 
  "1921": 22652, 
  "1922": 25442, 
  "1923": 7297, 
  "1924": 3271, 
  "1925": 3394, 
  "1926": 2884, 
  "1927": 5930, 
  "1928": 2902, 
  "1929": 3300, 
  "1986": 4917, 
  "1987": 5079, 
  "1645": 141, 
  "1644": 153, 
  "1647": 112, 
  "1646": 108, 
  "1641": 108, 
  "1640": 107, 
  "1728": 657, 
  "1642": 154, 
  "1726": 494, 
  "1727": 513, 
  "1724": 357, 
  "1725": 378, 
  "1649": 122, 
  "1648": 153, 
  "1720": 407, 
  "1721": 312, 
  "1861": 9159, 
  "1860": 10330, 
  "1863": 8790, 
  "1862": 8505, 
  "1865": 10062, 
  "1864": 9939, 
  "1867": 9724, 
  "1866": 11796, 
  "1869": 11565, 
  "1868": 13147, 
  "1643": 124, 
  "1729": 486, 
  "1722": 332, 
  "1723": 300, 
  "1814": 3025, 
  "1815": 3061, 
  "1816": 4786, 
  "1817": 12704, 
  "1810": 3217, 
  "1811": 3563, 
  "1812": 2661, 
  "1813": 2578, 
  "1818": 4677, 
  "1819": 5479, 
  "1609": 222, 
  "1608": 153, 
  "1979": 7285, 
  "1978": 8272, 
  "1601": 102, 
  "1600": 151, 
  "1603": 103, 
  "1602": 142, 
  "1605": 120, 
  "1604": 158, 
  "1607": 107, 
  "1606": 167, 
  "1964": 3081, 
  "1965": 3223, 
  "1966": 2571, 
  "1788": 1787, 
  "1789": 2756, 
  "1967": 2038, 
  "1780": 1169, 
  "1781": 1176, 
  "1782": 1385, 
  "1783": 1237, 
  "1784": 1461, 
  "1785": 2220, 
  "1786": 1361, 
  "1787": 1729, 
  "1962": 5756, 
  "1963": 7282, 
  "1775": 1112, 
  "1774": 999, 
  "1777": 1177, 
  "1776": 1467, 
  "1771": 930, 
  "1770": 1276, 
  "1773": 1254, 
  "1772": 889, 
  "1779": 1406, 
  "1778": 999, 
  "1678": 167, 
  "1679": 167, 
  "1674": 116, 
  "1675": 237, 
  "1676": 148, 
  "1677": 167, 
  "1670": 223, 
  "1671": 122, 
  "1672": 1093, 
  "1673": 142, 
  "1988": 5204, 
  "1858": 8818, 
  "1859": 8962, 
  "1850": 8260, 
  "1851": 7742, 
  "1852": 8861, 
  "1853": 8950, 
  "1854": 9324, 
  "1855": 10229, 
  "1856": 9072, 
  "1857": 9524, 
  "1933": 3994, 
  "1932": 2854, 
  "1931": 2779, 
  "1930": 3047, 
  "1937": 3587, 
  "1936": 3984, 
  "1935": 3391, 
  "1934": 3053, 
  "1939": 3475, 
  "1938": 3411, 
  "1998": 3328, 
  "1739": 1497, 
  "1738": 713, 
  "1632": 89, 
  "1633": 77, 
  "1634": 106, 
  "1635": 104, 
  "1636": 99, 
  "1637": 88, 
  "1731": 989, 
  "1730": 450, 
  "1733": 525, 
  "1732": 528, 
  "1735": 592, 
  "1734": 433, 
  "1737": 552, 
  "1736": 741, 
  "1748": 539, 
  "1749": 926, 
  "1744": 702, 
  "1745": 467, 
  "1746": 472, 
  "1747": 850, 
  "1740": 544, 
  "1741": 606, 
  "1742": 569, 
  "1743": 498, 
  "1898": 21499, 
  "1899": 21884, 
  "1894": 19622, 
  "1895": 20543, 
  "1896": 21209, 
  "1897": 20648, 
  "1890": 19683, 
  "1891": 19694, 
  "1892": 19731, 
  "1893": 20266, 
  "1683": 135, 
  "1682": 268, 
  "1689": 125, 
  "1688": 184, 
  "1807": 2380, 
  "1806": 2553, 
  "1805": 2750, 
  "1804": 2384, 
  "1803": 2664, 
  "1802": 3844, 
  "1801": 2574, 
  "1800": 34560, 
  "1809": 3377, 
  "1808": 2891, 
  "2002": 1713, 
  "2003": 1626, 
  "2000": 2249, 
  "2001": 1714, 
  "2006": 2064, 
  "2007": 1666, 
  "2004": 1868, 
  "2005": 1613, 
  "2008": 1695, 
  "2009": 846
}