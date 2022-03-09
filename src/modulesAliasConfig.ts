import moduleAlias from "module-alias";

moduleAlias.addAliases({
    "@routes": `${__dirname}/routes`,
    "@controllers": `${__dirname}/controllers`,
    "@helpers": `${__dirname}/helpers`,
});
