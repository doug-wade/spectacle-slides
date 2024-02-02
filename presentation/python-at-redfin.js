import React from "react";
import { createRoot } from "react-dom/client";
import {
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  Notes,
  OrderedList,
  Quote,
  Slide,
  Text,
  UnorderedList,
} from "spectacle";

import "normalize.css";

const images = {
    psp: require("../assets/psp.png"),
    python: require("../assets/python.png"),
    redfin: require("../assets/redfin.png"),
    bazel: require("../assets/bazel.png"),
    fabric: require("../assets/fabric.png"),
};

const Presentation = () => (
    <Deck>
        <Slide>
            <Heading>Python at Redfin</Heading>

            <Image
                alt="Puget Sound Python Group Logo"
                src={images.psp}
                style={{height: "100px", padding: "25 px"}} />
            <Image
                alt="Redfin Logo"
                src={images.redfin}
                style={{height: "100px", padding: "25px"}} />
            <Image
                alt="Python Logo"
                src={images.python}
                style={{height: "100px", padding: "25px"}} />
        </Slide>

        <Slide>
            <Heading fontSize="h3">Doug Wade</Heading>
            <Text>Platforms team</Text>

            <Notes>
                I'm mostly a javascriptista, but Python was the first language I liked
                I've been at Redfin almost a year
                I work mostly on front end build, especially performance
            </Notes>
        </Slide>

        <Slide>
            <Image
                style={{ height: "75px", border: "none", padding: "25px" }}
                alt="Python Logo"
                src={images.python} />
            <Heading>
                Python
            </Heading>
            <Heading fontSize="h3">Redfin Official Scripting Language</Heading>

            <UnorderedList>
                <ListItem>nagios alerts</ListItem>
                <ListItem>endpoint testing</ListItem>
                <ListItem>data imports</ListItem>
                <ListItem>walk score deployments</ListItem>
            </UnorderedList>
            <Notes>
                These are smaller uses; just emphasizing Python's ubiquity
                Our nagios alerts are a subset used to monitor Jenkins
                Our test team uses python to run performance tests against the site
                The data team uses python for listings imports, photos
                walk score uses boto to identify aws hosts and multiprocessing to manage pools
            </Notes>
        </Slide>

        <Slide>
            <Heading>Agenda</Heading>

            <OrderedList>
                <ListItem>Build: Bazel</ListItem>
                <ListItem>Deploy: Fabric</ListItem>
                <ListItem>Test: REF</ListItem>
            </OrderedList>

            <Notes>
                We're currently working on creating a continuous deployment pipeline
                Many parts of the are written in Python
                Our Python is rapidly growing
            </Notes>
        </Slide>

        <Slide>
            <Image
                style={{height: "75px", border: "none", padding: "25 px"}}
                alt="Bazel Logo"
                src={images.bazel} />
            <Heading>Bazel</Heading>
            <Heading fontSize="h3">Fast, reproducible build system</Heading>

            <UnorderedList>
                <ListItem>Written in <a href="http://bazel.io/docs/skylark/">a subset of Python</a></ListItem>
                <ListItem>Builds api server</ListItem>
                <ListItem>Builds distibution tarballs</ListItem>
                <ListItem>Adding building node modules</ListItem>
            </UnorderedList>
            <Notes>
                Written at Google, uses hermeticism to guarantee reproducability, and a distributed artifact cache for performance
                This is a big part of our move to continuous deployment, to get builds under 6 minutes
                We've struggled with our module builds because of npm violations of bazel assumptions
            </Notes>
        </Slide>

        <Slide>
            <Image
                style={{height: "75px", border: "none", padding: "25 px"}}
                alt="Bazel Logo"
                src={images.bazel} />
            <Heading>Bazel</Heading>
            <CodePane>{`
def _external_npm_module(ctx):
return struct(
    internal = False,
    transitive_internal_deps = [],
    transitive_external_deps = [ctx.attr.raw_target] + ctx.attr.runtime_deps
)
external_npm_module = rule(
    implementation = _external_npm_module,
    attrs = {
        "raw_target": attr.label(allow_files = True),
        "runtime_deps": attr.label_list(allow_files = True)
    },
)`}
            </CodePane>
            <Notes>
                This is an example rule -- the implementation is the function; the rule is the build script function invocation
                Note that skylark is a subset to enforce hermeticism
            </Notes>
        </Slide>

        <Slide>
            <Image
                style={{height: "75px", border: "none", padding: "25px"}}
                alt="Fabric Logo"
                src={images.fabric} />
            <Heading>Fabric</Heading>
            <Heading fontSize="h3">streamlines deploy and sysadmin tasks</Heading>

            <Text>Manages: servers - databases - solr - ci fleet - deployments</Text>
            <Notes>
                Used almost exclusively for deployments
                Is managed by a Google doc that is translated to xml and then updates the google doc with timing data
                Manage everything except a small subset of ops boxes that aren't deployed to
            </Notes>
        </Slide>

        <Slide>
            <Image
                style={{height: "75px", border: "none", padding: "25px"}}
                alt="Fabric Logo"
                src={images.fabric} />
            <Heading>Fabric</Heading>
            <CodePane language="python">{`
from fabric.api import *
import utils.configuration
from utils.deploylogger import log_run
import time
import os

'''Start apache on each server.'''
def do_work(config, silent_mode=False, args=None):
    retstring, retval = log_run(config, 'apachectl start', args)
    if retval:
        return (retstring, retval)
    return ('Success', 0)`}
            </CodePane>
            <Notes>
                This is an example rule -- all methods are named do_work and operate on each host
                We define groups of hosts that can be operated on, or single boxes
                It helped us coordinate deploys when developers managed deploy steps individually
            </Notes>
        </Slide>

        <Slide>
            <Image
                style={{ height: "75px", border: "none", padding: "25px" }}
                alt="Redfin Logo"
                src={images.redfin} />
            <Heading>dirpy</Heading>
            <Heading fontSize="h3">Server-side image cropping + resizing</Heading>

            <UnorderedList>
                <ListItem>Resizes arbitrary images from MLS to fit standard sizes</ListItem>
                <ListItem>Handles 156 images a second on reference VM</ListItem>
                <ListItem>built with <a href="https://pillow.readthedocs.io">Pillow</a></ListItem>
            </UnorderedList>
            <Notes>
                The reference vm was 4 cores with 4GB memory.
                Scales to 2000 imgs/sec; we run at 200 imgs/sec in prod
            </Notes>
        </Slide>

        <Slide>
            <Image
                style={{ height: "75px", border: "none", padding: "25px" }}
                alt="Redfin Logo"
                src={images.redfin} />
            <Heading>dirpy</Heading>
            <CodePane language="shell">{`
$ # Install from pypi
$ pip install dirpy

$ # Install from github
$ pip install https://github.com/redfin/dirpy/zipball/master`}
            </CodePane>
            <Text>
                <a href="https://github.com/redfin/dirpy">Fork it on github</a>
            </Text>
            <Text>
                <a href="https://pypi.python.org/pypi/dirpy/0.5">Find us on pypi</a>
            </Text>
        </Slide>

        <Slide>
            <Image
                style={{ height: "75px", border: "none", padding: "25px" }}
                alt="Redfin Logo"
                src={images.redfin} />
            <Heading>ETL Testing</Heading>
            <Heading fontSize="h3">Black box verification of ETL pipelines</Heading>

            <UnorderedList>
                <ListItem>defines test cases</ListItem>
                <ListItem>manages creation and deletion of source data</ListItem>
                <ListItem>manages execution and failure detection of the pipeline</ListItem>
                <ListItem>is extensible to new sources/destinations</ListItem>
                <ListItem>built with <a href="http://pytest.org/latest/">py.test</a> and <a href="http://springpython.webfactional.com/">Spring Python</a></ListItem>
            </UnorderedList>
            <Notes>
                We use it for the analytics cd pipeline to make sure changes are good
                Uses an existing EC2 instance to grab data from an S3 bucket and put it in Redshift
                Uses text files to test loads into our PostgreSql instances
                Does regression testing for the data team
            </Notes>
        </Slide>

        <Slide>
            <Image
                style={{ height: "75px", border: "none", padding: "25px" }}
                alt="Redfin Logo"
                src={images.redfin} />
            <Heading>ETL Testing</Heading>
            <CodePane>{`
<object id="trivial test" class="etltest.ETLTestCase">
    <constructor-arg name="description">
        <value>trivial assertion</value>
    </constructor-arg>
    <constructor-arg name="assertions">
        <list>
            <object id='trivial' class="etltest.PythonAssert">
                <!--a trivial PythonAssert to show how it works-->
                <constructor-arg name="code" value="2+2 == 4"/>
            </object>
        </list>
    </constructor-arg>
</object>`}
            </CodePane>
            <Notes>
                This is a very simple test case that only asserts that 2+2 = 4
                In real tests, you provide source, dest, and a pipeline
            </Notes>
        </Slide>

        <Slide>
            <Image
                style={{ height: "75px", border: "none", padding: "25px" }}
                alt="Redfin Logo"
                src={images.redfin} />
            <Heading>REF</Heading>
            <Heading fontSize="h3">Redfin Experiments Framework</Heading>

            <UnorderedList>
                <ListItem>performs A/B testing</ListItem>
                <ListItem>integrates with our feature toggle, Bouncer</ListItem>
                <ListItem>used to test major features before release</ListItem>
                <ListItem>counts events from Redshift table and generates static site</ListItem>
            </UnorderedList>
            <Notes>
                Something extra -- try to cut this
                Probably not the best example, but handles millions of events daily
            </Notes>
        </Slide>

        <Slide>
            <Heading>We're Hiring!</Heading>
            <Heading fontSize="h3"><a href="http://www.redfin.com/about/jobs/hq">Jobs site</a></Heading>
            <Text>Contact us: <a href="mailto:techrecruiting@redfin.com">techrecruiting@redfin.com</a></Text>
        </Slide>

        <Slide>
            <Heading>Questions?</Heading>
            <Quote>
                This couldn't possibly work, could it?  It can't be that easy, can it?  But it works! - Dan Fabulich
            </Quote>
            <Notes>
                Mostly, our experience in Python has been: it shouldn't be this easy, but it is
                Dan / jlo's story about starting a thread / process pool
            </Notes>
        </Slide>
    </Deck>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Presentation />);
