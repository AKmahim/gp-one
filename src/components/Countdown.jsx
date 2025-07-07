import React from "react";
import styled from "styled-components";

const Countdown = () => {
  return (
    <StyledWrapper>
      <div className="black-friday-component">
        <div className="timer">
          <div className="item">
            <div className="days">
              <div className="day">
                <span>00</span>
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
                <span>06</span>
                <span>07</span>
                <span>08</span>
                <span>09</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
                <span>22</span>
                <span>23</span>
                <span>24</span>
                <span>25</span>
                <span>26</span>
                <span>27</span>
                <span>28</span>
                <span>29</span>
                <span>30</span>
                <span>31</span>
              </div>
            </div>
            <p>Days</p>
          </div>
          <span className="colon">:</span>
          <div className="item">
            <div className="hours">
              <div className="hour">
                <span>00</span>
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
                <span>06</span>
                <span>07</span>
                <span>08</span>
                <span>09</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
                <span>22</span>
                <span>23</span>
                <span>24</span>
              </div>
            </div>
            <p>Hours</p>
          </div>
          <span className="colon">:</span>
          <div className="item">
            <div className="minutes">
              <div className="min">
                <span>00</span>
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
                <span>06</span>
                <span>07</span>
                <span>08</span>
                <span>09</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
                <span>22</span>
                <span>23</span>
                <span>24</span>
                <span>25</span>
                <span>26</span>
                <span>27</span>
                <span>28</span>
                <span>29</span>
                <span>30</span>
                <span>31</span>
                <span>32</span>
                <span>33</span>
                <span>34</span>
                <span>35</span>
                <span>36</span>
                <span>37</span>
                <span>38</span>
                <span>39</span>
                <span>40</span>
                <span>41</span>
                <span>42</span>
                <span>43</span>
                <span>44</span>
                <span>45</span>
                <span>46</span>
                <span>47</span>
                <span>48</span>
                <span>49</span>
                <span>50</span>
                <span>51</span>
                <span>52</span>
                <span>53</span>
                <span>54</span>
                <span>55</span>
                <span>56</span>
                <span>57</span>
                <span>58</span>
                <span>59</span>
                <span>60</span>
              </div>
            </div>
            <p>Minutes</p>
          </div>
          <span className="colon">:</span>
          <div className="item">
            <div className="seconds">
              <div className="sec">
                <span>00</span>
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
                <span>06</span>
                <span>07</span>
                <span>08</span>
                <span>09</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
                <span>22</span>
                <span>23</span>
                <span>24</span>
                <span>25</span>
                <span>26</span>
                <span>27</span>
                <span>28</span>
                <span>29</span>
                <span>30</span>
                <span>31</span>
                <span>32</span>
                <span>33</span>
                <span>34</span>
                <span>35</span>
                <span>36</span>
                <span>37</span>
                <span>38</span>
                <span>39</span>
                <span>40</span>
                <span>41</span>
                <span>42</span>
                <span>43</span>
                <span>44</span>
                <span>45</span>
                <span>46</span>
                <span>47</span>
                <span>48</span>
                <span>49</span>
                <span>50</span>
                <span>51</span>
                <span>52</span>
                <span>53</span>
                <span>54</span>
                <span>55</span>
                <span>56</span>
                <span>57</span>
                <span>58</span>
                <span>59</span>
                <span>60</span>
              </div>
            </div>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .black-friday-component {
    --count: 0;
    --days: 3;
    --hours: 6;
    --minutes: 36;
    --seconds: 60;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin: auto;
    padding: 0 40px;
  }

  .black-friday-component .timer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0rem;
    overflow: hidden;
    width: calc(344px + 0px);
    text-align: center;
  }
  .black-friday-component .timer .colon {
    width: 8px;
    color: #000;
    font-size: 2rem;
  }
  .black-friday-component .timer .item {
    text-align: center;
    width: 75px;
    height: fit-content;
  }
  .black-friday-component .timer .item .days,
  .black-friday-component .timer .item .hours,
  .black-friday-component .timer .item .minutes,
  .black-friday-component .timer .item .seconds {
    text-align: center;
    width: 55px;
    overflow: hidden;
    height: 50px;
    padding: 0 14px;
    border-radius: 10px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
  }
  .black-friday-component .timer .item .day,
  .black-friday-component .timer .item .hour,
  .black-friday-component .timer .item .min,
  .black-friday-component .timer .item .sec {
    text-align: center;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .black-friday-component .timer .item .day span,
  .black-friday-component .timer .item .hour span,
  .black-friday-component .timer .item .min span,
  .black-friday-component .timer .item .sec span {
    height: 40px;
    color: #000;
    font-size: 2rem;
    display: inline-block;
  }
  .black-friday-component .timer .item .day {
    --count: var(--days);
    animation: slide calc(var(--count) * 86400s) ease-out 0s 31 normal both;
  }
  .black-friday-component .timer .item .hour {
    --count: var(--hours);
    animation: slide calc(var(--count) * 3600s) steps(var(--count)) 0s 24 normal
      both;
  }
  .black-friday-component .timer .item .min {
    --count: var(--minutes);
    animation: slide calc(var(--count) * 60s) steps(var(--count)) 0s 60 normal
      both;
  }
  .black-friday-component .timer .item .sec {
    --count: var(--seconds);
    animation: slide calc(var(--count) * 1s) steps(var(--count)) 0s 60 normal
      both;
  }
  .black-friday-component .timer .item p {
    text-align: center;
    color: #000;
    font-size: 1.2rem;
    font-weight: 400;
  }

  @keyframes slide {
    0% {
      transform: translateY(calc(-40px * var(--count)));
    }
    99.6% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(calc(-40px * var(--count)));
    }
  }
  @keyframes jump {
    0% {
      transform: translateY(0);
      scale: 1;
    }
    50% {
      transform: translateY(-10px);
      scale: 1.1;
    }
    100% {
      transform: translateY(0);
      scale: 1;
    }
  }
`;

export default Countdown;
