Optimization Problems (`optim`)
===============================

.. container::

   |Zenith Clown| |REPO:ADMIN| |CODE:DOCUMENTATION|
   
   ✨ *utility function related
   to*\ ```scipy.optimize.linprog`` <https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.linprog.html>`__\ *and/or*\ ```pulp`` <https://coin-or.github.io/pulp/>`__\ *for
   optimization problem* - **``linprog.py``** ✨

.. toctree::
    :maxdepth: 4

    linprog
    wrappers

.. container::

   `Linear
   Programming <https://en.wikipedia.org/wiki/Linear_programming>`__ is
   defined as a method of achieving the best outcome using a
   mathematical model whose relationships are represented by linear
   relationships. In contrast, to `Non-Linear
   Programming <https://en.wikipedia.org/wiki/Nonlinear_programming>`__
   a basic assumption of *linear programming* is that the relationships
   between the decision variables, constraints and the objective
   functions are linear - meaning they can be represented by a straight
   line.
   `[1] <https://www.linkedin.com/advice/0/how-can-you-tell-problem-requires-linear-nonlinear-i77jc>`__
   `[2] <https://www2.kuet.ac.bd/icmiee2014/wp-content/uploads/2015/02/ICMIEE-PI-140224.pdf>`__
   `[3] <https://www.matec-conferences.org/articles/matecconf/pdf/2018/42/matecconf_qpi2018_04004.pdf>`__

   The variables (:math:`x_1, x_2, ..., x_n`) of both the programming
   are either ``integer``, or ``continuos``, if all the variables are
   ``integer`` then it is known as `Integer
   Programming <https://en.wikipedia.org/wiki/Integer_programming>`__,
   however, most of the real world problems are `“Mixed Integer
   Programming” <https://www.frontiersin.org/articles/10.3389/fenrg.2020.00049/full>`__
   abbreviated as ``MILP``. The utility functions for linear programming
   is available under `linprog.py <./linprog.py>`__ and the non-linear
   programming defination is currently in development.

   .. rubric:: Getting Started
      :name: getting-started

   The code is publicly available at
   ```optim`` <https://gist.github.com/ZenithClown/277ddc84fa10239b4a24a366813761a5>`__
   by `ZenithClown <https://github.com/ZenithClown>`__. The module
   requires external libraries
   ```pulp`` <https://coin-or.github.io/pulp/>`__ and
   ```scipy`` <https://scipy.org/>`__, to initialize:

   .. code:: shell

      # install pip libraries:
      pip install pulp # linear programming using pulp
      pip install scipy # scientific computing library

      # clone the code like:
      git clone https://gist.github.com/ZenithClown/277ddc84fa10239b4a24a366813761a5.git optim
      export PYTHONPATH="${PYTHONPATH}:optim"

   .. rubric:: Linear Programming
      :name: linear-programming

   Currently, a objective function is defined for ``PuLP``, that aims to
   simplify large variables problem defination using a combination of
   ``scipy.optimize.linprog`` and ``pulp`` module approach. TODO:
   Documentation!!

   .. code:: python

      import pulp as p
      import linprog as lp

      n = 3 # no. of variables

      defination = lp.LpObject(n, cost = [10, 15, 25], sense = "minimize", var_lb = [0] * n)
      print(repr(defination)) # development representation
      >> LP(2402254029488, lp-problem, <n = 3, vars = dict_keys(['X1', 'X2', 'X3'])>)
      print(f"Defined Objective Function: {defination.problem.objective}")
      >> Defined Objective Function: 10*X1 + 15*X2 + 25*X3

      # add constraints
      defination.problem += defination.variables["X1"] + defination.variables["X2"] + defination.variables["X3"] >= 1_000
      defination.problem += defination.variables["X1"] - 2 * defination.variables["X2"] >= 0
      defination.problem += defination.variables["X3"] >= 340

      status = defination.problem.solve()
      print(p.LpStatus[status])
      >> Optimal

      print("X1 =", p.value(defination.variables["X1"])) 
      print("X2 =", p.value(defination.variables["X2"]))
      print("X3 =", p.value(defination.variables["X3"]))
      print("Objective = ", p.value(defination.problem.objective))
      >> X1 = 660.0
      >> X2 = 0.0
      >> X3 = 340.0
      >> Objective =  15100.0

.. |Zenith Clown| image:: https://img.shields.io/badge/🧠-Debmalya_Pramanik-blue
   :target: https://zenithclown.github.io/
.. |REPO:ADMIN| image:: https://img.shields.io/badge/👔-ZenithClown-2A8542
   :target: https://github.com/ZenithClown
.. |CODE:DOCUMENTATION| image:: https://img.shields.io/badge/👔-DOCS-42F5DD
   :target: https://zenithclown.github.io/code/modules/docs/_build/html/optim.html
