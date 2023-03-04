function describe_city(city, country) {
    if (country === void 0) { country = "Turkiye"; }
    console.log(city + " is in " + country);
}
describe_city("Istanbol");
describe_city("Karachi", "Pakistan");
describe_city("Makkah", "Saudi_Arabia");
