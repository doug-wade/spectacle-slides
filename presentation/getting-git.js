// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Slide,
  Text
} from "spectacle";

// Import theme
import { theme } from "spectacle-theme-solarized-dark";

// Require CSS
require("normalize.css");

const images = {
  gitInit: require("../assets/git-init.png"),
  gitContents: require("../assets/git-contents.png"),
  gitCommitObject: require("../assets/git-commit-object.png"),
  gitTreeObject: require("../assets/git-tree-object.png"),
  gitBlobObject: require("../assets/git-blob-object.png"),
  gitTagObject: require("../assets/git-tag-object.png"),
  gitBranch: require("../assets/git-branch.png"),
  gitIndex: require("../assets/git-index.png"),
  gitTwoParents: require("../assets/git-two-parents.png"),
  gitGraph: require("../assets/git-graph.png"),
  gitCheckout: require("../assets/git-checkout.png"),
  gitReset: require("../assets/git-reset.png"),
  gitRebaseMess: require("../assets/git-rebase-mess.png"),
  gitCommitAmend: require("../assets/git-commit-amend.png"),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide>
            <Heading>
                Getting git
            </Heading>
            <Text>
                Or, How I Learned To Stop Worrying And Love The DAG
            </Text>
        </Slide>
        <Slide>
            <Heading>
                It's gonna get weird
            </Heading>
            <Text>
                We're going to use very uncommon git commands you may never see again; don't worry about it.
            </Text>
        </Slide>
        <Slide>
            <Heading>
                git init
            </Heading>
            <Text>
                Create a new git repository!
            </Text>
            <Notes>
                » git init
            </Notes>
        </Slide>
        <Slide>
            <Heading>
                git init
            </Heading>
            <Text>
                But what's inside?
            </Text>
            <Image src={images.gitInit}/>
            <Notes>
                » ls -la .git/

                HEAD === The current commitish that represents the state of the filesystem
                config === Your git configuration, like ~/.gitconfig for a single repo
                description === Only for use on GitWeb
                hooks === The code for hooks to run during the development lifecycle, like precommit
                info === Contains "exclude", which is a .gitignore specific to you
                objects === The object database
                refs === What the branches and tags point to
            </Notes>
        </Slide>
        <Slide>
            <Heading>
                git init
            </Heading>
            <Text>
                But what's inside?
            </Text>
            <Image src={images.gitContents} height={'500'}/>
        </Slide>
        <Slide>
            <Heading>git add</Heading>
            <Text>Staging/Caching/Indexing your files</Text>
            <Notes>
                » echo "version 1 one.txt" &gt; one.txt
                » ls .git/index
                » ls .git/objects
                » git add one.txt
                » ls .git/objects
                $ git ls-files --stage
                » git cat-file -p 83baae61804e65cc73a7201a7252750c76066a30
                » ls .git/index
                » xxd .git/index

                When you run git add, it actually creates a temporary blob object
                with your code in it. This is why changes you make after staging files
                are safe -- the code has been snapshotted. Then, git adds your file to
                the index, a binary file that represents the "stage" or the "cache" --
                all three are the same in git land.
            </Notes>
        </Slide>
        <Slide>
            <Heading>git add</Heading>
            <Image src={images.gitIndex}></Image>
            <Notes>
                The index file has a bunch of information in it. It's basically the
                output of stat(2):

                » stat -t '%FT%T' one.txt

                It includes the last time the file metadata changed, contents changed,
                the device the file is on, the file inode number, the file permissions,
                the user and group id, the file size, the object id, the file path and
                some other stuff.

                '%FT%T' is a format string for times.
            </Notes>
        </Slide>
        <Slide>
            <Heading>
                git commit
            </Heading>
            <Text>
                Create our second object
            </Text>
            <Notes>
                » echo "version 1 two.txt" &gt; two.txt
                » git add .
                » git commit -m "version 1"
            </Notes>
        </Slide>
        <Slide>
            <Heading>
                What just happened?
            </Heading>
            <Notes>
                We updated HEAD to point to the new commit

                » git log

                But what is a commit? git is a "content-addressable filesystem" under the covers, 
                which is a kind of key-value store. git stores "objects", which are one of four 
                types: commit, tree, blob, and annotated tag. We can investigate the contents 
                of the commits we created with git cat-file.

                » less .git/refs/heads/master
                » git cat-file -t c0a5fa9792db46adf7c3b2a14117124da23dcc13
            </Notes>
        </Slide>
        <Slide>
            <Heading>
                Commits
            </Heading>
            <Image src={images.gitCommitObject}></Image>
            <Notes>
                The commit object is a fairly straightforward object that contains the metadata 
                about a given commit. We can inspect it with git cat-file

                » git cat-file -p c0a5fa9792db46adf7c3b2a14117124da23dcc13

                Note that it gives a reference to a "tree", which is another type of git object

                » git cat-file -t c784033db59ed8c77840fd8b345c00971381fb89
            </Notes>
        </Slide>
        <Slide>
            <Heading>
                Trees
            </Heading>
            <Image src={images.gitTreeObject}></Image>
            <Notes>
                The tree is like a directory -- conceptually, directories are a type of tree --
                in that it contains a tree of changesets or trees. We can inspect the tree object
                also with git cat-file

                » git cat-file -p c784033db59ed8c77840fd8b345c00971381fb89

                Note that it gives a reference to a "blob", which is another type of git object

                » git cat-file -t 83baae61804e65cc73a7201a7252750c76066a30
            </Notes>
        </Slide>
        <Slide>
            <Heading>
                Blobs
            </Heading>
            <Image src={images.gitBlobObject}></Image>
            <Notes>
                The blob is like a file.

                » git cat-file -p 83baae61804e65cc73a7201a7252750c76066a30
            </Notes>
        </Slide>
        <Slide>
            <Heading>
                What just happened?
            </Heading>
            <List>
                <ListItem>We created a commit object</ListItem>
                <ListItem>We created a tree object</ListItem>
                <ListItem>We created two blob objects</ListItem>
                <ListItem>We updated HEAD to point to the new commit (which has a reference to its parent)</ListItem>
            </List>
            <Notes>
                That's a commit, folks! No magic here.
            </Notes>
        </Slide>
        <Slide>
            <Heading>
                Annotated Tag object
            </Heading>
            <Text>You said there were four object types...</Text>
            <Notes>
                » git tag -a v1 -m "version 1"
                » cat .git/refs/tags/v1
                » git cat-file -t 931093016e32e7ef826b10e50cd52d87976ef14c
                » git cat-file -p 931093016e32e7ef826b10e50cd52d87976ef14c

                It also points to a commitish

                » git cat-file -p 89319c2ab2ce42cdb0ede974599ee2bfbc3774fa
            </Notes>
        </Slide>
        <Slide>
            <Heading>
                Annotated Tag object
            </Heading>
            <Image src={images.gitTagObject}></Image>
        </Slide>
        <Slide>
            <Heading>
                git branch
            </Heading>
            <Text>Starting development</Text>
            <Notes>
                » git co -b branch-one
                » ls .git/refs/heads
                » less .git/refs/heads/branch-one
            </Notes>
        </Slide>
        <Slide>
            <Heading>
                git branch
            </Heading>
            <Image src={images.gitBranch}></Image>
            <Notes>
                A git branch is more like a tag than anything else -- its a pointer
                to a commit and an identifying name. The commits themselves contain
                pointers to their parents, so the branch object doesn't need to track
                the history of the branch.

                » git cat-file -p 89319c2ab2ce42cdb0ede974599ee2bfbc3774fa

                Underline that a commit has a parent as part of what defines the commit.
            </Notes>
        </Slide>
        <Slide>
            <Heading>git Checkout</Heading>
            <Text>Moving HEAD</Text>
            <Notes>
                As we noted while branching, there is a HEAD, which points to the commit
                that represents the current state of the file system. We can use checkout
                to change HEAD.

                » cat .git/HEAD
                » git co master
                » cat .git/HEAD
                » git co v1
                » cat .git/HEAD
                » git co branch-one

                HEAD can point to any commitish.
            </Notes>
        </Slide>
        <Slide>
            <Heading>git Checkout</Heading>
            <Image src={images.gitCheckout}></Image>
        </Slide>
        <Slide>
            <Heading>git merge</Heading>
            <Text>Commits with two parents</Text>
            <Notes>
                » echo "version 1 three.txt" &gt; three.txt
                » git add .
                » git commit -m "add three.txt"
                » git co master
                » echo "version 2 one.txt" &gt; one.txt
                » git add .
                » git commit -m "version 2 one.txt"
                » git merge branch-one

                We have to commit to master as well to simulate real-world situations
                and to avoid a fast-forward merge
            </Notes>
        </Slide>
        <Slide>
            <Heading>git merge</Heading>
            <Image src={images.gitTwoParents}></Image>
            <Notes>
                Note that this commit has two parents!

                » git cat-file -p 5079a55cab2a7fc9a6081d570356ecd6aa7e31cd
            </Notes>
        </Slide>
        <Slide>
            <Heading>git merge</Heading>
            <Image src={images.gitGraph}></Image>
            <Notes>
                Note that this commit has two parents!
            </Notes>
        </Slide>
        <Slide>
            <Heading>Interlude: The DAG</Heading>
            <Text>Its all a Directed Acyclic Graph</Text>
            <Notes>
                At its core, git represents your version history as a directed,
                acyclic graph. A graph is a datastructure from computer science
                that has nodes and edges. For example, the World-Wide Web can be
                represented as a graph, with the pages being nodes and the links
                being edges. Like the web, git is "directed", mean that the links
                have a direction -- in the web, from the page containing the 
                anchor to its target; in git from the child commit to its parent.
                However, unlike the web, git is "acyclic" -- there are no cycles,
                or chains of commits that can contain one commit more than once.
                Every operation manipulates this DAG, usually creating commits on
                the DAG.
            </Notes>
        </Slide>
        <Slide>
            <Heading>Interlude: The DAG</Heading>
            <Image src={images.gitGraph}></Image>
            <Notes>
                You can see the DAG in this visualization -- you have parent nodes
                at the bottom of the output, and their children headed up the
                chain.
            </Notes>
        </Slide>
        <Slide>
            <Heading>git reset</Heading>
            <Text>No-one ever needs to know</Text>
            <Notes>
                » echo "regretable change" &gt; one.txt
                » git commit -am 'regretable change'

                Great, so we've committed directly to master, which is a protected
                branch. Now what?

                » git log
                » git reset --hard head~1
                » git log

                What did we just do? We've changed the commit that the branch master
                points at -- we've only moved a pointer.
            </Notes>
        </Slide>
        <Slide>
            <Heading>git reset</Heading>
            <Text>Nothing is ever lost</Text>
            <Notes>
                But we've lost our commit! It's gone forever, right? Nope.

                » git co bbbbc94
                » git co -b branch-two

                Because a commit is an object in the database, it isn't lost when
                we move the pointer -- the object still exists in the filesystem!
                Sometimes, though, you don't have access to the commit sha to
                retrieve it, and you don't want to search the objects directly.
            </Notes>
        </Slide>
        <Slide>
            <Heading>git reset</Heading>
            <Image src={images.gitReset}></Image>
        </Slide>
        <Slide>
            <Heading>git reflog</Heading>
            <Text>Nothing is ever lost</Text>
            <Notes>
                Let's "lose" another commit.

                » echo "lost change" &gt;&gt; two.txt
                » git commit -am "lose me"
                » git reset --hard HEAD~1
                » clear

                So, now we have a lost commit and we don't know its shasum. How
                do we get it back?

                » git reflog
                » git reset --hard "HEAD@{1}"
                » git log
            </Notes>
        </Slide>
        <Slide>
            <Heading>git gc</Heading>
            <Text>Okay some things are lost sometimes</Text>
            <Notes>
                Let's "lose" it again.

                » git reset --hard HEAD~1

                So, how can we lose it permanently?

                » git -c gc.reflogExpire=0 -c gc.reflogExpireUnreachable=0 -c gc.rerereresolved=0 -c gc.rerereunresolved=0 -c gc.pruneExpire=now gc
                » git cat-file -p f05770ffe20c15b611d9d3612bd6d1bc54b3d50b

                git will run gc periodically to keep your repository up and 
                running smoothly. By default, it only gcs blobs that are
                older than two weeks, but don't expect for your work from
                last quarter to still be available if its not on a branch.
            </Notes>
        </Slide>
        <Slide>
            <Image src={images.gitRebaseMess}></Image>
        </Slide>
        <Slide>
            <Heading>git rebase</Heading>
            <Text>A more elegant merge strategy</Text>
            <Notes>
                There are two ways of combining code from two different branches.
                We've already seen "merge", but let's also look at "rebase".

                » git co master
                » git co -b branch-three
                » echo "new feature one.txt" &gt;&gt; one.txt
                » git add one.txt
                » git commit -am "my new feature one.txt"
                » git co master
                » echo "new feature two.txt" &gt;&gt; two.txt
                » git commit -am "my new feature two.txt"
                » git co -
                » git rev-parse head
                » git rebase master
                » git rev-parse head
            </Notes>
        </Slide>
        <Slide>
            <Heading>git rebase</Heading>
            <Text>What happened?</Text>
            <Notes>
                Note that the shasum of the commit has changed! Its because
                we have actually created a new commit -- the parent of the
                commit is part of the commit itself, as we saw, so when you
                change the parent, you create a new commit. We can see that
                the previous commit still exists and is orphaned:

                » git cat-file -p 06733f4de5904f4f9d5d13501c6ec8ffd89a0704
                » git cat-file -p 6f277c019a771095936c51f4364b8290434c80ad

                Now, when we get merged to master, we get a fast-forward
                merge without a merge commit:

                » git co master
                » git merge branch-three
                » git log
            </Notes>
        </Slide>
        <Slide>
            <Heading>git commit --amend</Heading>
            <Text>What's in a commit'</Text>
            <Notes>
                We can change a commit into a new commit by using git commit
                --amend -- note that it changes the shasum because we're
                creating a new commit.

                » git rev-parse head
                » git commit --amend --author="Cristian Roldan &lt;cr7&#64;soundersfc.com&gt;"
                » git rev-parse head
            </Notes>
        </Slide>
        <Slide>
            <Heading>git commit --amend</Heading>
            <Image src={images.gitCommitAmend}></Image>
            <Notes>
                » git cat-file -p 1b0ebcdc6aaaf0711433b5cbac2ea551f5020557
            </Notes>
        </Slide>
        <Slide>
            <Heading>Questions?</Heading>
        </Slide>
        <Slide>
            <Image src={'http://www.angelaslatter.com/wp-content/uploads/2011/12/otters.jpg'}></Image>
        </Slide>
      </Deck>
    );
  }
}
